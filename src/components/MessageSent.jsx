import React, { useState } from "react";
import { motion } from "framer-motion";
import cross from "../assets/cross.png";
import { slideIn } from "../utils/motion";

const MessageSent = () => {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <>
      {isToggle && (
        <div className="p-4 bg-sky-500 rounded-2xl shadow-lg w-fit  flex items-center justify-end">
          <span className="text-white capitalize">Message sent successfully!</span>
          <img
            src={cross}
            className="ml-4 cursor-pointer w-8 h-8 hover:bg-sky-400 rounded-xl"
            alt="Close"
            onClick={() => setIsToggle(false)}
          />
        </div>
      )}
    </>
  );
};

export default MessageSent;
