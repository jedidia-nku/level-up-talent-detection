import React, { useState } from 'react'
import {motion} from "framer-motion";

const RegistrationForm: React.FC = () => {
    
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        age: '',
        province: '',
        district: '',
        sector: '',
        telephone: '',
        email: '',
        gender: '',
        careerExperience: '',
        educationLevel: '',
        musicGenre: '',
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5000/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
        
            const data = await response.json();
            alert(data.message);
          } catch (error) {
            console.error("Error submitting form:", error);
          }
        };

  return (
    <form action="https://fabform.io/f/xxxxx" method="post" onSubmit={handleSubmit}>
    <motion.h2
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-2xl font-bold text-center mb-4 text-yellow-400">Registration Form
    </motion.h2>

    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Middle Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Last Name"
            />
          </div>
        </motion.div>

    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="flex flex-col md:flex-row space-y-2 md:space-x-4 my-4">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Age"
          />
          </div>
          <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-2">
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Province"
            />
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="District"
            />
            <input
              type="text"
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Sector"
            />
          </div>
          </div>
        </motion.div>
    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="w-full">
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone</label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Telephone"
          />
        </motion.div>
    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="flex flex-col md:flex-row space-y-2 md:space-x-2 mt-4">
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Email"
          />
        </div>
        <div className="w-full">
          <label htmlFor="careerExperience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
          <input
            type="number"
            name="careerExperience"
            value={formData.careerExperience}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Years of Experience"
          />
        </div>
        </motion.div>

    <motion.div
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="flex flex-col md:flex-row space-y-2 md:space-x-4 my-4">
        <div className="w-full">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">Level of Education</label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
          >
            <option value="">Select Education Level</option>
            <option value="Secondary">Secondary</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="musicGenre" className="block text-sm font-medium text-gray-700">Music Genre</label>
          <select
            name="musicGenre"
            value={formData.musicGenre}
            onChange={handleChange}
            className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none"
          >
            <option value="">Select Music Genre</option>
            <option value="Rap">Rap</option>
            <option value="Gospel">Gospel</option>
            <option value="R&B">R&B</option>
            <option value="Afrobeat">Afrobeat</option>
            <option value="Other">Other</option>
          </select>
        </div>
        </motion.div>
    <motion.button
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} type="submit" className="w-full p-2 mt-4 bg-blue-600 text-black rounded-md bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 transition-all">Submit
    </motion.button>
  </form>
  
  )
}

export default RegistrationForm
