import React, { useState, useContext } from "react";
import data from "../data/sidebar.json";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
const { Sider } = Layout;

function Sidebar() {
  const { collapsed, setCollapsed } = useContext(ThemeContext);

  const onCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <Sider collapsed={!collapsed} onCollapse={onCollapse} className="sidebar">
      <Menu
        theme="dark"
        mode="inline"
        items={data.main_list.map((x) => {
          return {
            key: x.id,
            label: x.disp_name,
            icon: !x.card_link ? (
              <div>
                <Link
                  onClick={() => {
                    localStorage.setItem("category", x.disp_name);
                  }}
                  to={`/resource/category/${x.disp_name}`}
                >
                  <img src={x.img_src} width="20" height="20" />
                </Link>
              </div>
            ) : (
              <div>
                <a
                  onClick={() => {
                    localStorage.setItem("category", x.disp_name);
                  }}
                  href={x.card_link}
                  target="_blank"
                >
                  <img src={x.img_src} width="20" height="20" />
                </a>
              </div>
            ),
          };
        })}
      />

      <div className="spacing"></div>
      <Menu
        theme="dark"
        mode="inline"
        items={data.secondary_list.map((x) => {
          return {
            key: x.id,
            label: x.disp_name,
            icon: <img src={x.img_src} width="20" height="20" />,
          };
        })}
      />
    </Sider>
  );
}

export default Sidebar;
