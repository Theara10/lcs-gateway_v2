import React, { useContext } from 'react';
import { Drawer, Row, Col, Menu } from 'antd';
import logo from '../assets/Koompi-Black.png';
import data from '../data/sidebar.json';

import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';

function SideHeader() {
  const { toggled, setToggled } = useContext(SidebarContext);

  const onClose = () => {
    setToggled(false);
  };
  return (
    <div className="">
      <div className="top-menu">
        <Drawer
          width="200"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={toggled}
          bodyStyle={{
            background: 'white',
          }}
        >
          <center>
            <img src={logo} alt="koompi-logo" className="koompi-logo" />
          </center>
          <Row
            className="header-container"
            justify="space-between"
            align="middle"
          >
            <Col span={24}>
              <Menu
                theme="dark"
                mode="inline"
                items={data.main_list.map((x) => {
                  return {
                    key: x.id,
                    label: x.disp_name,
                    icon: (
                      <Link
                        onClick={() => {
                          localStorage.setItem('category', x.disp_name);
                          onClose();
                        }}
                        to={
                          !x.card_link
                            ? `/resource/category/${x.disp_name}`
                            : x.card_link
                        }
                      >
                        <img
                          src={x.img_src}
                          alt="koompi-img"
                          width="20"
                          height="20"
                        />
                      </Link>
                    ),
                  };
                })}
              />
            </Col>
          </Row>
        </Drawer>
      </div>
    </div>
  );
}

export default SideHeader;
