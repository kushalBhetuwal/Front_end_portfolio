import React from "react";
import { motion } from "framer-motion";

import BallCanvas from "./canvas/BallCanvas";
import { SectionWrapper } from "../Hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.p variants={fadeIn("right", "spring", 0.1, 1)}>
        <h1 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack Skills{" "}
        </h1>
      </motion.p>
      <motion.p variants={fadeIn("left", "spring", 1, 1)}>
        <div className=" mt-10 flex flex-row flex-wrap justify-center gap-10 cursor-pointer">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(Tech, "");
