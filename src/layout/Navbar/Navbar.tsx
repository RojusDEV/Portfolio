import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="ordered-list">
          <li className="nav-el">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-el">
            <a href="#projects-section-id">
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-el">
            <a href="#experience-section-id">
              <span>Experience</span>
            </a>
          </li>
          <li className="nav-el">
            <a href="#contact-section-id">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
