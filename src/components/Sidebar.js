import React, { useContext } from 'react';
import data from '../data/sidebar.json';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
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
            icon: !x.link ? (
              <div>
                <Link
                  to={`/resource/category/${x.disp_name}`}
                  onClick={() => {
                    localStorage.setItem('category', x.disp_name);
                  }}
                >
                  <img
                    src={x.img_src}
                    width="20"
                    height="20"
                    alt="koompi-img"
                  />
                </Link>
              </div>
            ) : (
              <div>
                <Link to={x.link}>
                  <img
                    src={x.img_src}
                    width="20"
                    height="20"
                    alt="koompi-img"
                  />
                </Link>
              </div>
            ),
          };
        })}
      />
    </Sider>
  );
}

export default Sidebar;
