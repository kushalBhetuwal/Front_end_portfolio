import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/EarthCanvas";
import { SectionWrapper } from "../Hoc";
import MessageSent from "./MessageSent";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic form validation:
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all the required fields!!");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          form_name: form.name,
          to_name: "Kushal",
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setMessageSent(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!!")
    }
    setLoading(false);
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label htmlFor="Name" className="flex flex-col">
          <div className="px-2 flex gap-1">
          <span className="mb-4 font-medium text-white">Your Name</span><span className="text-red-600">*</span>
          </div>
            <input
              id="name"
              name="name"
              placeholder="Enter Your Name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label htmlFor="Email" className="flex flex-col">
          <div className="px-2 flex gap-1">
          <span className="mb-4 font-medium text-white">Your Email</span><span className="text-red-600">*</span>
          </div>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              id="email"
              required
              className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium text-white placeholder:text-secondary"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
          <div className="px-2 flex gap-1">
          <span className="mb-4 font-medium text-white">Your Message</span><span className="text-red-600">*</span>
          </div>
            <textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="Send me Your message"
              onChange={handleChange}
              rows={7}
              required
              className="bg-tertiary placeholder:text-secondary text-white py-4 px-6 rounded-lg outline-none border-none  font-medium"
            />
          </label>
          {messageSent && <MessageSent/>}
          <button
            type="submit"
            className="bg-tertiary rounded-xl py-3 px-8 w-fit text-white  outline-none border-none font-bold shadow-md shadow-primary  hover:bg-sky-700"
          >
            {loading ? "Sending...." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
