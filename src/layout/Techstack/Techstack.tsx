import "./Techstack.scss";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaReact, FaSass, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

import { RiNextjsFill } from "react-icons/ri";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Techstack = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  
  return (
    <div className="Hero__wraper-bottom" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
      >
        <h2 className="bottom-title">EXPERIENCE WITH</h2>
        <ul className="icons-list">
          <li className="icon-el">
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <SiTypescript size={50} data-logo="TS-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://en.wikipedia.org/wiki/HTML"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <FaHtml5 size={50} data-logo="HTML-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://sass-lang.com/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <FaSass size={50} data-logo="SASS-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <RiTailwindCssFill size={50} data-logo="tailwind-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://react.dev/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <FaReact size={50} data-logo="React-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://nextjs.org/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <RiNextjsFill size={50} data-logo="NextJS-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://nodejs.org/en"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <FaNode size={50} data-logo="NodeJs-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <SiPostgresql size={50} data-logo="SQL-logo" />
            </a>
          </li>
          <li className="icon-el">
            <a
              href="https://cplusplus.com/"
              target="_blank"
              aria-label="technology-source"
              className="nostyle"
            >
              <TbBrandCpp size={50} data-logo="CPP-logo" />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Techstack;
