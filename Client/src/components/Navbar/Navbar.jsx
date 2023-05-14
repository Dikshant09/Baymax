import { useEffect, useState } from "react";
import { getTopNav } from "./data/navbars";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const auth = getAuth();

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <Link to={"/"} style={{ color: "#000" }} className="nav__brand">
            BayMax
          </Link>
          <ul className={collapse}>
            {navItems.map((item) => {
              if (
                auth.currentUser &&
                (item.label === "SignIn" || item.label === "SignUp")
              )
                return "";
              if (item.label === "Profile") {
                return (
                  <Link
                    to={item.href}
                    key={item.id}
                    className="nav_item_margin nav__item"
                  >
                    <FaUser />
                  </Link>
                );
              }
              return (
                <Link
                  to={item.href}
                  key={item.id}
                  className="nav_item_margin nav__item"
                >
                  {item.label}
                </Link>
              );
            })}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
