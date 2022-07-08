import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { ThemeContext } from '../contexts/ThemeContext';
import SideHeader from './SideHeader';
import { Avatar, Popover } from 'antd';

function Navbar() {
  const { setCollapsed } = useContext(ThemeContext);
  const { setToggled } = useContext(SidebarContext);
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
          <img
            className="desktop-menu"
            onClick={() => onCollapse()}
            src={require('../assets/icons/menu.png')}
            height={20}
            style={{
              marginLeft: 10,
              marginRight: 20,
              cursor: 'pointer',
            }}
            alt="koompi-img"
          />
          <img
            className="mobile-menu"
            onClick={() => onToggle()}
            src={require('../assets/icons/menu.png')}
            height={20}
            style={{ marginLeft: 10, marginRight: 20, cursor: 'pointer' }}
            alt="koompi-img"
          />
          <a href="/">
            <img
              src={require('../assets/Koompi-Black.png')}
              height={40}
              alt="koompi-img"
              className="logo-img"
            />
          </a>
        </div>
        <div className="navbar-right">
          <a
            href="http://admin.koompi.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Popover title={null} content="Admin">
              <Avatar
                size="large"
                // icon={<UserOutlined />}
                icon={
                  <img
                    src="/images/icons/profile.png"
                    alt="admin profile"
                    className="admin-profile"
                  />
                }
                className="user-avatar-offline"
              />
            </Popover>
          </a>
        </div>
      </div>
      <SideHeader />
    </div>
  );
}

export default Navbar;
