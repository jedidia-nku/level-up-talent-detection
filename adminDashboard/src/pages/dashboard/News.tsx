import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';

interface NewsItem {
    _id?: string;
    title: string;
    description: string;
    imageUrl?: string;
  }

const News: React.FC = () => {
const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
const [newsList, setNewsList] = useState<NewsItem[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const [showModal, setShowModal] = useState(false);
const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
const [news, setNews] = useState<{
    title: string;
    description: string;
    image: File | null;
  }>({
    title: '',
    description: '',
    image: null,
  });
const [currentNewsId, setCurrentNewsId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setNews((prev) => ({ ...prev, image: selectedFile }));
    }
  };
  
  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://level-up-talent-detection.onrender.com/api/news");
      setNewsList(res.data || []);
      
    } catch (error) {
      console.error("Error fetching news:", error);
      setError("Failed to fetch news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", news.title);
    formData.append("description", news.description);
  
    if (news.image && typeof news.image !== "string") {
      formData.append("image", news.image);
    }
  
    try {
      await axios.put(`https://level-up-talent-detection.onrender.com/api/news/${currentNewsId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("News updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      setIsNewsModalOpen(false);
      fetchNews(); // or refetch your list
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update news.");
    }
  };


const handleDelete = async () => {
    if (!currentNewsId) {
      console.error("No news ID set for deletion.");
      return;
    }
  
    try {
      await axios.delete(`https://level-up-talent-detection.onrender.com/api/news/${currentNewsId}`);
      console.log("News deleted!");
      toast.success("News deleted successfully!");
      setShowModal(false);
      fetchNews(); // refresh the news list
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete news.");
    }
  };

useEffect(() => {
  if (newsList.length > 0 && !selectedNews) {
    setSelectedNews(newsList[0]);
  }
}, [newsList, selectedNews]);

  return (
    <>
    <div>
    <div className="max-w-screen-xl mx-auto p-5 relative">
      <div className="w-full flex justify-end">
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
          }} className="text-gray-600">Stay informed with the latest updates, stories, and highlights from our community and beyond.
          </motion.p>
      </div>
      {!loading && !error && (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-8 md:pt-1">
    {newsList
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
          className="cursor-pointer p-3 border rounded-md"
          >
          <a href="#">
              <div className="h-40 bg-cover text-center overflow-hidden"
                  style={{backgroundImage: `url('${item.imageUrl}')`}}
                  title="Woman holding a mug">
              </div>
          </a>
          <p className="text-gray-900 font-semibold text-md my-2 hover:text-yellow-500 line-clamp-1">{item.title}</p>
          <div className="flex justify-end w-full">
          {selectedNews && (
          <Link to={`/news/${selectedNews._id}`} className="flex justify-center items-center gap-2 border px-2 rounded-md border-gray-300 hover:border-yellow-500 hover:text-yellow-500 transition duration-500 ease-in-out whitespace-nowrap" >
            Read news <FaArrowRightLong />
          </Link>
        )}
        </div>
        <div className="flex justify-between gap-2 mt-4">
          <button
            onClick={() => {
            console.log("Current news ID:", currentNewsId);
            setCurrentNewsId(item._id!);
            setNews({
                title: item.title,
                description: item.description,
                image: null,
              });
            setIsNewsModalOpen(true);
            }}
          className='flex gap-2 bg-green-300 border rounded-md px-2 py-1 hover:bg-green-400 hover:text-white trasition duration-500 ease-in-out'>Update <span className="hidden lg:flex">news</span>
          </button>
          <button
          onClick={() => {
          setCurrentNewsId(item._id!);
          setShowModal(true)
          }} 
           className='flex gap-2 bg-red-300 border rounded-md px-2 py-1 hover:bg-red-400 hover:text-white trasition duration-500 ease-in-out'>Delete 
           <span className="hidden lg:flex">news</span>
           </button>
          </div>
        </motion.div>
        ))}
      </div>
      )}
    </div>  
    {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md w-80 text-center">
            <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this news?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {isNewsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 w-full max-w-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Update News</h2>
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
                  required={!news.image} // if already has image, don't require new one
                />
                {typeof news.image === "string" && (
                <img
                    src={`${news.image}`}
                    alt="Current"
                    className="w-32 h-20 object-cover mb-2 rounded"
                />
                )}
              </div>

              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <ToastContainer /></>
  )
}

export default News
