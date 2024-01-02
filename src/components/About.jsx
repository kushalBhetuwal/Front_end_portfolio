import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({index, title, icon})=>{
  return(
    <div>
    +
    <p>{title}</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As an accomplished software developer specializing in modern web
        technologies, I bring a wealth of experience in TypeScript and
        JavaScript, coupled with deep expertise in cutting-edge frameworks such
        as React, Node.js, Three.js, and Next.js. My passion lies in crafting
        efficient, scalable, and intuitive web applications that address
        real-world challenges.  My collaborative approach, combined
        with my ability to understand and translate client needs into actionable
        solutions.  I am eager to leverage my skills and expertise to
        contribute to your team, driving projects to successful completion while
        exceeding expectations. Let's collaborate to transform your visionary
        ideas into reality.
      </motion.p>
      <div className="mt-20 flex flex-wrap">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  );
};

export default About;
