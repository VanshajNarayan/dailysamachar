import "./MobileNavbar.css";
import { NavLink } from "react-router-dom";

const MobileNavbar = ({show, setShow}) => {
  return (
    <>
      <div className="mobileNav_items">
        <ul onClick={() => setShow(!show)}>
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
    </>
  );
};

export default MobileNavbar;
