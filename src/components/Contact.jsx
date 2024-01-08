import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/EarthCanvas";
import { SectionWrapper } from "../Hoc";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send();
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
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              name="name"
              placeholder="Enter Your Name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="Email" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your email"
              onChange={handleChange}
              id="email"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none border-none font-medium text-white placeholder:text-secondary"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Name</span>
            <textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="Send me Your message"
              onChange={handleChange}
              rows={7}
              className="bg-tertiary placeholder:text-secondary text-white py-4 px-6 rounded-lg outline-none border-none  font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary rounded-xl py-3 px-8 w-fit text-white  outline-none border-none font-bold shadow-md shadow-primary  hover:bg-sky-700"
          >
            Send
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
