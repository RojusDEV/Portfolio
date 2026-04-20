import { useState } from "react";
import "./Navbar.scss";

const NAVBAR_OFFSET = 88;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const smoothScrollTo = (targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (distance === 0) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetY);
      return;
    }

    const duration = Math.min(1400, Math.max(850, Math.abs(distance) * 0.55));
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleNavClick =
    (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      closeMenu();

      const targetElement = document.getElementById(targetId);

      if (!targetElement) {
        return;
      }

      const targetY =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET;

      smoothScrollTo(Math.max(0, targetY));
    };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <button
          className={`menu-toggle ${isMenuOpen ? "menu-toggle--open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={toggleMenu}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <ul
          id="navbar-menu"
          className={`ordered-list ${isMenuOpen ? "ordered-list--open" : ""}`}
        >
          <li className="nav-el">
            <a
              className="nav-link"
              href="#content"
              onClick={handleNavClick("content")}
            >
              <span>Home</span>
            </a>
          </li>
          <li className="nav-el">
            <a
              className="nav-link"
              href="#about-section-id"
              onClick={handleNavClick("about-section-id")}
            >
              <span>About</span>
            </a>
          </li>
          <li className="nav-el">
            <a
              className="nav-link"
              href="#projects-section-id"
              onClick={handleNavClick("projects-section-id")}
            >
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-el">
            <a
              className="nav-link"
              href="#experience-section-id"
              onClick={handleNavClick("experience-section-id")}
            >
              <span>Experience</span>
            </a>
          </li>
          <li className="nav-el">
            <a
              className="nav-link"
              href="#contact-section-id"
              onClick={handleNavClick("contact-section-id")}
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
