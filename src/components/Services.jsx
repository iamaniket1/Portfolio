import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { IoDesktopOutline } from "react-icons/io5";
import { GiPencilBrush } from "react-icons/gi";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>What I can Do?</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <AiFillIeCircle />
          <p>Web Development</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <DiResponsive size={100} />
          <span>Responsive Web Design</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <FaReact />
          <span>Single Page Application (SPA) Development</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <GiPencilBrush />
          <IoDesktopOutline />
          <span>Web Designing</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
