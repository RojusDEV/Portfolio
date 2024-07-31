import { motion, useAnimation, useInView } from "framer-motion";
import "./ProjectCardStyles.scss";
import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import ReactGA from "react-ga4";
const ProjectCardLayout = ({
  children,
  bgImageSrc,
  projectLink,
  date,
}: {
  children: React.ReactNode;
  bgImageSrc: string;
  projectLink: string;
  date?: string;
}) => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const trackClick = () => {
    ReactGA.event({
      category: "project click",
      action: "Project_Click",
      label: "Element", // optional
    });
  }

  return (
    <div className="" ref={ref}>
      <a href={projectLink} target="_blank" aria-label="Project" className="nostyle" onClick={trackClick}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
        >
          <div className="project-card-wrapper">
            {date ? <div className="project-date">{date}</div> : <div></div>}
            <div
              className="project-card-bg"
              style={{ backgroundImage: `url(${bgImageSrc})` }}
            ></div>
            <div className="project__info">
              <div className="project-info-col">
                <span className="click-here">CLICK HERE TO VISIT</span>
                {children}
              </div>
              <div className="project-info-col">
                <GoArrowUpRight size={25} color="white" />
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default ProjectCardLayout;
