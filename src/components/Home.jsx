import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import me from "../assets/logo2.png";
import CV from "../assets/Aniket_s_Resume react.pdf";
function Home() {
  // const clientCount = useRef(null);
  // const animationClientsCount = () => {
  //   animate(0, 20, {
  //     duration: 1,
  //     onUpdate: (value) => (clientCount.current.textContent = value),
  //   });
  // };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hey, I am <br /> Aniket Srivastava
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Coder"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:srivastavaaniket264@gmail.com">Hire Me</a>
            <a href={CV} target="blank">
              Resume
              <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Projects Made</span>
          </article> */}
          <aside>
            {/* <article>
                <p>
                    +
                    500
                </p>
                <span>Projects Completed</span>
            </article> */}

            {/* <article data-special>
                <p>Contact</p>
                <span>srivastavaaniket264@gmail.com</span>
            </article> */}
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Aniket" />
      </section>
      {/* <BsChevronDown /> */}
    </div>
  );
}

export default Home;
