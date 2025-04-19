import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
// import { LuPlus } from "react-icons/lu";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsandGallery: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<{ filename: string; url: string }[]>([]);

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
<div className="max-w-screen-xl mx-auto p-5 relative">
  <div className="w-full flex justify-end">
  <div>
      <div className="relative">
      <button
      onClick={() => setIsOpen(true)}
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

        <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
                <motion.div
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
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </motion.div>
            <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </motion.div>
            <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </motion.div>
            <motion.div
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
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">How
                    Trump's Mistakes Became Biden's Big Breaks</a>
            </motion.div>
            <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: `url('https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')`}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">Survey:
                    Many Americans 'Dissatisfied' With U.S.</a>
            </motion.div>
            <motion.div
                initial={{ opacity:0, y: -100 }}
                whileInView={{ opacity:1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
                }}>
                <a href="#">
                    <div className="h-40 bg-cover text-center overflow-hidden"
                        style={{backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1')"}}
                        title="Woman holding a mug">
                    </div>
                </a>
                <a href="#"
                    className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-yellow-500 transition duration-500 ease-in-out">Trump
                    Steps Back Into Coronavirus Spotlight</a>
            </motion.div>
        </div>

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
<ToastContainer />
</div>
  )
}

export default NewsandGallery
