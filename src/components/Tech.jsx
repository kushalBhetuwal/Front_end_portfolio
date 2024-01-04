import React from "react";
import { technologies } from "../constants";
import BallCanvas from "./Canvas/BallCanvas";
const Tech = () => {
  return (
    <div className=" mt-10 flex flex-row flex-wrap justify-center items-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
