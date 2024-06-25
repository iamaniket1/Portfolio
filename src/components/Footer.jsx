import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/109760206?v=4"}
          alt="Founder"
        />

        <h2>Aniket Srivastava</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://linkedin.com/in/aniket-srivastava-33235722a"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://instagram.com/_.aniket.srivastava._"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/iamaniket1" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
