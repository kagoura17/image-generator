import { NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import star from "../../../assets/Star.png";
import home from "../../../assets/Home.png";
import file from "../../../assets/File-grey.png";
import downloead from "../../../assets/Filedown.png";
import history from "../../../assets/History.png";
import settings from "../../../assets/cog.png";
import logout from "../../../assets/logout.png";
import "./sideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="side-bar">
      <div className="logo">
            <img src={logo} alt={logo} />
          </div>
        <div className="list">
          <ul>
          
          <div className="createBTN">
            <NavLink to="/create">
              <li>
                <button>
                  <img src={star} alt={star} /> Create
                </button>
              </li>
            </NavLink>
          </div>
          <NavLink to="/">
            <li>
              <img src={home} alt={home} /> Home
            </li>
          </NavLink>
          <NavLink to="/collection">
            <li>
              <img src={file} alt={file} /> collection
            </li>
          </NavLink>
          <NavLink to="/download">
            <li>
              <img src={downloead} alt={downloead} />
              Download
            </li>
          </NavLink>
          <NavLink to="/history">
            <li>
              <img src={history} alt={history} />
              History
            </li>
          </NavLink>
          <div className="sideBar-bottum ">
            <NavLink to="/settings">
              <li>
                <img src={settings} alt={settings} />
                Settings
              </li>
            </NavLink>
            <NavLink to="/logout">
              <li>
                <img src={logout} alt={logout} />
                Logout
              </li>
            </NavLink>
          </div> </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
