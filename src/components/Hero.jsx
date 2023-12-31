import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputerCanvas } from "./";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#52d3d8]" />
          <div className="w-1 sm:h-80 h-40 purple-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#DC84F3]">Kushal</span>{" "}
          </h1>
          <p
            className={`${styles.heroSubText}  mt-2 hidden sm:block text-white-100`}
          >
            I am a front-end developer specializing in creating engaging,
            user-friendly websites and applications. My focus lies in HTML, CSS,
            JavaScript, and modern framewework like React and Next.js
          </p>
          <p
            className={`${styles.heroSubText}  block sm:hidden  mt-2 text-white-100`}
          >
            I am a front-end developer specializing in creating engaging,
            user-friendly websites and applications.
          </p>
          <ComputerCanvas />
        </div>
      </div>
    </section>
  );
};

export default Hero;
