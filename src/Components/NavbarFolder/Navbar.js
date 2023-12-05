import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CgMenuBoxed } from "react-icons/cg";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar">
        <nav className="navbar_container">
          <div className="heading">
            <h4>News</h4>
          </div>
          <div className="nav_items">
            <ul>
              <li className="active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/business">Business</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment">Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/science">Science</NavLink>
              </li>
              <li>
                <NavLink to="/health">Health</NavLink>
              </li>
              <li>
                <NavLink to="/technology">Technology</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar_icons">
            {show ? (
              <RxCrossCircled
                className="icons"
                onClick={() => setShow(!show)}
              />
            ) : (
              <CgMenuBoxed className="icons" onClick={() => setShow(!show)} />
            )}
          </div>
        </nav>
      </div>
      {
        show && <MobileNavbar show={show} setShow={setShow} />
      }
    </>
  );
};

export default Navbar;
