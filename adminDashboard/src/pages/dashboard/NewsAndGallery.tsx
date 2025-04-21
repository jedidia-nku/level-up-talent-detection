import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
// import { LuPlus } from "react-icons/lu";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNews({ ...news, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNews({ ...news, image: file });
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
      const response = await fetch("http://localhost:5000/api/news", {
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
  
      // Reset form and close modal
      setNews({ title: "", description: "", image: null });
      setIsNewsModalOpen(false);
    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(error?.response?.data?.message || "Network error or server not responding.");
    }
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true); // start loading
        const res = await axios.get("http://localhost:5000/api/news");
        setNewsList(res.data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/upload");
        setImages(res.data);
      } catch (err) {
        console.error("Failed to fetch images", err);
      }
    };

    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("photo", file);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
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
    } catch (error: any) {
      console.error("Upload failed:", error);
      toast.error(error?.response?.data?.message || "Network error or server not responding.");
    }
  };
  

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
       className="bg-gray-700 text-white px-4 py-2 flex gap-2 items-center rounded-sm shadow-sm whitespace-nowrap">
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
<div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
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
                backgroundImage: `url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")`,
                }}
                title="Woman holding a mug"
            ></div>
            </a>
            <div>
      </div>
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <a href="#"
                        className="text-xs text-yellow-500 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                        Election
                    </a>
                    <a href="#"
                        className="block text-gray-900 font-bold text-2xl mb-2 hover:text-yellow-500 transition duration-500 ease-in-out">Revenge
                        of the Never Trumpers</a>
                    <p className="text-gray-700 text-base mt-2">Meet the Republican dissidents fighting to push Donald Trump
                        out of office—and reclaim their party</p>
                </div>
            </div>
        </motion.div>

        {!loading && !error && (
        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
        {newsList.map((item) => ( 
                <motion.div
                key={item._id}
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('http://localhost:5000${item.imageUrl}')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">{item.title}</a>
            </motion.div>
            ))}
        </div>
        )}

</div>
</div>

<div className="flex items-center justify-between gap-4 px-5"> 
<div className="container mx-auto text-center p-5 mb-4">
  <div className="w-full flex justify-end">
  <div>
      <div className="relative">
      <button
      onClick={() => setIsOpen(true)}
       className="bg-gray-700 text-white px-4 py-2 flex gap-2 items-center rounded-sm shadow-sm whitespace-nowrap">
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
    {images.map((img) => (<div key={img.filename}>
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
<ToastContainer />
</div>
  )
}

export default NewsandGallery
