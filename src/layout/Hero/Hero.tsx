import "./Hero.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Hero = () => {
  const ref = useRef(null);
  const mainControls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="Hero" >
      <div className="Hero__wraper-top" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
        >
          <div className="Hero__section__left">
            <span>Hi👋</span>
            <span>My name is</span>
            <span className="title-name">Rojus</span>
            <span>I build things for web</span>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ ease: "easeOut", duration: 1, delay: 0.25 }}
        >
          <div className="Hero__section__right">
            <div className="shape-container">
              <div className="shape" />
            </div>
          </div>
        </motion.div>
      </div>
      {/* <Techstack /> */}
    </div>
  );
};

export default Hero;
