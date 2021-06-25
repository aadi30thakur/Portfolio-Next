import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import { Skill } from "../type";

const Bar: FunctionComponent<{
  data: Skill;
}> = ({ data: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: "8",
        stifness: "100",
      },
    },
  };
  return (
    <div className="my-2 text-white bg-white rounded-full dark:bg-dark-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-400"
        style={{ width: bar_width }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
