import React from 'react';
import { Layout, Menu } from 'antd';
import {
  FundProjectionScreenOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import '../styles/components/Template.css';

const { Header, Footer, Content } = Layout;

const logout = () => {
  localStorage.clear();
  window.location = '/';
};

const Template = ({ children }) => {
  const location = useLocation();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" className="header-menu-template">
          <Menu.Item
            key="1"
            icon={<FundProjectionScreenOutlined />}
            className={
              location.pathname === '/movies' ? 'ant-menu-item-selected' : ''
            }
          >
            <Link to="/movies">Películas</Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<FundProjectionScreenOutlined />}
            className={
              location.pathname === '/movies-favorites'
                ? 'ant-menu-item-selected'
                : ''
            }
          >
            <Link to="/movies-favorites">Películas favoritas</Link>
          </Menu.Item>

          <Menu.Item key="3" icon={<LogoutOutlined />} onClick={() => logout()}>
            Salir
          </Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Test Vertebra @2021 Created by José ortega
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Template;
