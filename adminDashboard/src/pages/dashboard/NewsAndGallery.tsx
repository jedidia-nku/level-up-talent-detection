import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
// import { LuPlus } from "react-icons/lu";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRightLong } from "react-icons/fa6";

interface NewsItem {
  _id?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const NewsandGallery: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<{ filename: string; url: string }[]>([]);
  const [news, setNews] = useState<{
    title: string;
    description: string;
    image: File | null;
  }>({
    title: "",
    description: "",
    image: null,
  });
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNews({ ...news, image: file });
  };

  
  const fetchNews = async () => {
    try {
      setLoading(true); // start loading
      const res = await axios.get("https://level-up-talent-detection.onrender.com/api/news");
      setNewsList(res.data || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", news.title);
    formData.append("description", news.description);
    if (news.image) {
      formData.append("image", news.image);
    }
  
    try {
      const response = await fetch("https://level-up-talent-detection.onrender.com/api/news", {
        method: "POST",
        body: formData,
      });
  
      const result = await response.json();

      toast.success(result.message || "Image uploaded successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
  
          // Reset form
    setNews({ title: "", description: "", image: null });
    setIsNewsModalOpen(false);

    // 🔁 Refresh the news list
    await fetchNews();

    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(error?.response?.data?.message || "Network error or server not responding.");
    }
  };

  useEffect(() => {
    fetchNews();

  }, []);


  
  const fetchImages = async () => {
    try {
      const res = await axios.get("https://level-up-talent-detection.onrender.com/api/upload");
      setImages(res.data);
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
  };

  
  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const response = await axios.post("https://level-up-talent-detection.onrender.com/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data;

      toast.success(data.message || "Image uploaded successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
  
      console.log("Uploaded successfully:", data);
      setIsOpen(false);

      await fetchImages()
    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(error?.response?.data?.message || "Network error or server not responding.");
    }
  };

  useEffect(() => {
    if (newsList.length > 0 && !selectedNews) {
      setSelectedNews(newsList[0]);
    }
  }, [newsList, selectedNews]);

return (
<div>
{loading && <p>Loading...</p>}
{error && <p>{error}</p>}
<div className="max-w-screen-xl mx-auto p-5 relative">
  <div className="w-full flex justify-end">
  <div>
      <div className="relative">
      <button
      onClick={() => setIsNewsModalOpen(true)}
       className="text-white px-4 py-2 flex gap-2 items-center rounded-sm shadow-sm whitespace-nowrap"
       style={{
        background: "linear-gradient(90deg, #1C5CA6 5%,rgb(5, 25, 49) 329.93%)",
      }}
      >
        Add News
      </button>
      </div>
  </div>
</div>
<div className="container mx-auto text-center mb-12">
    <motion.h2
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }} className="text-3xl font-bold text-yellow-500">NEWS
      </motion.h2>
      
      <motion.p
      initial={{ opacity:0, y: -100 }}
      whileInView={{ opacity:1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }} className="text-gray-600">Providing Fresh Produce Every Single Day
      </motion.p>
  </div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5">
    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="sm:col-span-5">
        <a href="#">
            <div
                className="bg-cover text-center overflow-hidden"
                style={{
                minHeight: "300px",
                backgroundImage: `url("${
          selectedNews
            && `https://level-up-talent-detection.onrender.com${selectedNews?.imageUrl}`
        }")`,
      }}
      title={selectedNews?.title ?? undefined}
            ></div>
            </a>
            <div>
      </div>
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <p className="text-gray-900 font-bold text-2xl mb-2 hover:text-yellow-500 line-clamp-2">
                          {selectedNews && selectedNews.title}
                        </p>
                    <p className="text-gray-700 text-base mt-2 line-clamp-3">
                    {selectedNews
                    && selectedNews.description}
                    </p>
                    <div className="w-full flex justify-end px-6 mt-3">
                    {selectedNews && (
                    <Link to={`/news/${selectedNews._id}`} className="flex justify-center items-center gap-2 border px-2 rounded-md border-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition duration-500 ease-in-out" >
                      Read more <FaArrowRightLong />
                    </Link>
                  )}
                  </div>
                </div>
            </div>
        </motion.div>

  {!loading && !error && (
  <div className="md:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5 pt-8 md:pt-1">
  {newsList
  .filter((item) => item._id !== selectedNews?._id)
  .slice(0, newsList.length <= 6 ? newsList.length : 6)
    .map((item) => ( 
          <motion.div
          key={item._id}
          initial={{ opacity:0, y: -100 }}
          whileInView={{ opacity:1, y: 0 }}
          transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
          }}
          onClick={() => setSelectedNews(item)}
          className="cursor-pointer"
          >
          <a href="#">
              <div className="h-40 bg-cover text-center overflow-hidden"
                  style={{backgroundImage: `url("https://level-up-talent-detection.onrender.com${item.imageUrl}")`}}
                  title="Woman holding a mug">
              </div>
          </a>
          <p className="text-gray-900 font-semibold text-md my-2 hover:text-yellow-500 line-clamp-2">{item.title}</p>
      </motion.div>
      ))}
  </div>
  )}

</div>
</div>
{newsList.length > 6 && (
      <div className="flex justify-end mb-4 px-10">
        <Link
          to="/news"
          className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded hover:bg-yellow-600 transition duration-300"
        >
          View More
        </Link>
      </div>
    )}

<div className="flex items-center justify-between gap-4 px-5"> 
<div className="container mx-auto text-center p-5 mb-4">
  <div className="w-full flex justify-end">
  <div>
      <div className="relative">
      <button
      onClick={() => setIsOpen(true)}
       className="text-white px-4 py-2 flex gap-2 items-center rounded-sm shadow-sm whitespace-nowrap"
       style={{
        background: "linear-gradient(90deg, #1C5CA6 5%,rgb(5, 25, 49) 329.93%)",
      }}>
        Add Photo
      </button>
      </div>
  </div>
</div>
    <motion.h2
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-3xl font-bold text-yellow-500">GALLERY
    </motion.h2>
      
    <motion.p
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-gray-600">Providing Fresh Produce Every Single Day
    </motion.p>
      
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
    {images
    .slice(0, newsList.length <= 6 ? newsList.length : 6)
    .map((img) => (<div key={img.filename}  onClick={() => setSelectedImage(img.url)} className="cursor-pointer">
    <motion.img
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }}className="h-auto max-w-full rounded-lg" src={img.url} alt={img.filename} />
      </div>))}
      </div>
      {images.length > 6 && (
      <div className="flex justify-end mb-4 px-10 w-full mt-10">
        <Link
          to="/gallery"
          className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded hover:bg-yellow-600 transition duration-300"
        >
          View more images
        </Link>
      </div>
    )}
    </div>
</div>
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Upload Photo</h2>

      <input 
      type="file" 
      accept="image/*" 
      onChange={(e) => setFile(e.target.files?.[0] || null)}
      className="mb-4" />

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setIsOpen(false)}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </div>
    </div>
  </div>
)}
{isNewsModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-md p-6 w-full max-w-md shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add News</h2>
        <button onClick={() => setIsNewsModalOpen(false)} className="text-gray-500 hover:text-red-500 text-xl">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={news.description}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none"
            rows={3}
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  </div>
)}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)} // Close when clicked
  >
    <img
      src={selectedImage}
      alt="Full Screen"
      className="max-w-full rounded-lg h-[90%]"
    />
  </div>
)}
<ToastContainer />
</div>
  )
}

export default NewsandGallery
