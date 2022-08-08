import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { ThemeContext } from "../contexts/ThemeContext";
import SideHeader from "./SideHeader";

function Navbar() {
  /* eslint-disable */
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const { toggled, setToggled } = useContext(SidebarContext);
  /* eslint-disable */
  const onCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  const onToggle = () => {
    setToggled((toggled) => !toggled);
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img alt=""
            className="desktop-menu"
            onClick={() => onCollapse()}
            src={require("../assets/icons/menu.png")}
            height={20}
            style={{
              marginLeft: 10,
              marginRight: 20,
              cursor: "pointer",
            }}
          />
          <img alt=""
            className="mobile-menu"
            onClick={() => onToggle()}
            src={require("../assets/icons/menu.png")}
            height={20}
            style={{ marginLeft: 10, marginRight: 20, cursor: "pointer" }}
          />
          <a href="/">
            <img alt=""
              src={require("../assets/Koompi-Black.png")}
              height={40}
              className="logo-img"
            />
          </a>
          <div className="search">
            <input placeholder="Search" />
            <div>
              <img
                src={require("../assets/icons/search.png")}
                width={18}
                height={18}
                alt="search-icon"
              />
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <a href="http://admin.koompi.app" target="_blank" rel="noreferrer">
            <div className="navbar-right-icon">
              <img alt=""
                className="admin-icon"
                src={require("../assets/icons/admin.png")}
                height={20}
              />
              <p>Admin</p>
            </div>
          </a>
        </div>
      </div>
      <SideHeader />
    </div>
  );
}

export default Navbar;
