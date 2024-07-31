import { useEffect } from "react";
import Contact from "./layout/Contact/Contact";
import Hero from "./layout/Hero/Hero";
import Navbar from "./layout/Navbar/Navbar";
import Projects from "./layout/Projects/Projects";
import "./scss/style.scss";
import ReactGA from "react-ga4";
// TODO:
//   [] Add comets in the background
//   [] Stack redirects to technologies
//   [] WHEN HOVERING ON STACK ADD STARS
//   [X] ADD BACKGROUND GRID
//   [] Add confetti after submit !!!!
//   [] Add arrow button in hero to scroll down

const trackingId = import.meta.env.VITE_TRACKING_ID;

let ran = true;

useEffect(() => {
  if (ran) {
    ReactGA.initialize(trackingId);
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: "/landingpage",
      title: "Landing Page",
    });
  }

  return () => {
    ran = false;
  };
}, []);

ReactGA.initialize([
  {
    trackingId: trackingId,
    // gaOptions: {}, // optional
    // gtagOptions: {...}, // optional
  },
]);

ReactGA.send({ hitType: "pageview", page: "/", title: "Custom Title" });

function App() {
  return (
    <div className="main-wrapper" id="content">
      <Navbar />
      <Hero />
      <Projects />
      {/* //Reviews by people   */}
      <Contact />
    </div>
  );
}

export default App;
