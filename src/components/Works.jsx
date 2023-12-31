import React from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../Hoc";
import { projects } from "../constants";
import { github } from "../assets";
import StarsCanvas from "./StarsCanvas";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 250 }}
        className=" p-4 bg-tertiary rounded-2xl sm:w-[460px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer "
          onClick={() => {
            if (index === 6 || index === 7) {
              alert(
                "Please Click on GitHub Icon for this Project: 'Project Not Deployed'"
              );
            } else {
              window.open(live_link, "_blank");
            }
          }}
        >
          <img
            src={image}
            width={150}
            height={240}
            alt="project-image"
            className=" h-full w-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source-code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[18px]">{description}</p>
        </div>
        <div className="flex gap-4 cursor-pointer flex-wrap">
          {tags.map((tag) => (
            <div className={`hover:bg-sky-900  hover:rounded-[12px]`}>
              <p
                key={`name-${tag.name}`}
                className={`${tag.color}`}
                onClick={() => window.open(tag.link, "_blank")}
              >{`#${tag.name}`}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <p className={`${styles.sectionHeadText}`}>Projects</p>
      </motion.div>
      <div className="w-full flex flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3  text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 gap-10  flex flex-wrap justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
