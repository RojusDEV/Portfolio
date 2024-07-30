import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <ul className="ordered-list">
          <li className="nav-el">
            <span>Home</span>
          </li>
          <li className="nav-el">
            <span>Projects</span>
          </li>
          <li className="nav-el">
            <span>Experience</span>
          </li>
          <li className="nav-el">
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
