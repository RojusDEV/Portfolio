import { CSSProperties, useEffect } from "react";
import About from "./layout/About/About";
import Contact from "./layout/Contact/Contact";
import Experience from "./layout/Experience/Experience";
import Hero from "./layout/Hero/Hero";
import Navbar from "./layout/Navbar/Navbar";
import Projects from "./layout/Projects/Projects";
import "./scss/style.scss";
import ReactGA from "react-ga4";

function App() {
  const trackingId = import.meta.env.VITE_TRACKING_ID;
  let ran = true;

  useEffect(() => {
    if (ran) {
      ReactGA.initialize(trackingId);
      // Send pageview with a custom path
      ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Porfolio Page",
      });
    }

    return () => {
      ran = false;
    };
  }, []);

  return (
    <div className="main-wrapper" id="content">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
