import React from 'react'
import {motion} from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    // const [isChecked, setIsChecked] = useState(false);
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const form = event.currentTarget;
      const formData = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      };
    
      try {
        const response = await fetch("https://level-up-talent-detection.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
    
        const data = await response.json();
            if (response.ok) {
              toast.success(data.message || "Contact message sent successfully.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
              });
            } else {
              toast.error(data.message || "Something went wrong.");
             }
             } catch (error) {
              console.error("Error submitting Contact message:", error);
              toast.error("Network error or server not responding.");
          }
        };
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="relative mb-6" data-te-input-wrapper-init>
        <input type="text"
        name="name"
        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
            id="exampleInput90" />
        <label
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            >Name
            </label>
        </motion.div>
        <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="relative mb-6" data-te-input-wrapper-init>
        <input type="email"
        name="email"
        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
            id="exampleInput91" />
        <label
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            >Email address
            </label>
        </motion.div>
        <motion.div
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} className="relative mb-6" data-te-input-wrapper-init>
        <textarea
            name="message"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
            ></textarea>
        <label
            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
        </motion.div>
        <motion.button
        initial={{ opacity:0, y: -100 }}
        whileInView={{ opacity:1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }} 
        type="submit"
        className="mb-6 w-full rounded bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0 duration-500 ease-in-out"
        >
            Send
        </motion.button>
    </form>
    <ToastContainer />
    </div>
  )
}

export default ContactForm
