import React, { useState } from 'react';
import {
  DashboardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
  ProductOutlined,
  AppstoreAddOutlined,

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import '../styles/page.css';
import logo from '../assets/HBLogo.jpeg';


export default function Page() {
  const navigate = useNavigate();
  const { Header, Content, Footer, Sider } = Layout;

  const items2: MenuProps['items'] = [
    {
      key: `dashboard`,
      icon: <DashboardOutlined />,
      label: `Dashboard`,
      onClick: () => {
        navigate('/page/dashboard');
      },
    },
    {
      key: `orders`,
      icon: <ShoppingCartOutlined />,
      label: `Orders`,
      onClick: () => {
        navigate('/page/orders');
      },
    },
    {
      key: `users`,
      icon: <UserOutlined />,
      label: `Users`,
      onClick: () => {
        navigate('/page/users');
      },
    },

    {
      key: `category`,
      icon: <UnorderedListOutlined />,
      label: `Category`,
      onClick: () => {
        navigate('/page/category');
      },
    },

    {
      key: `products`,
      icon: <ProductOutlined />,
      label: `Products`,
      onClick: () => {
        navigate('/page/products');
      },
    },
    {
      key: `stores`,
      icon: <AppstoreAddOutlined />,
      label: `Stores`,
      onClick: () => {
        navigate('/page/stores');
      },
    },
    {
      key: `logout`,
      icon: <LogoutOutlined />,
      label: `Logout`,
      onClick: () => {
        localStorage.clear();
        navigate('/login');
      },
    },
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='full-height'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className='demo-logo'>
          <img src={logo} />
        </div>
      </Header>
      <Content style={{ padding: '0 16px' }}>
        <Layout
          style={{
            padding: '16px 0 0',
            margin: '16px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            style={{ background: colorBgContainer, height: '70vh' }}
            width={200}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['dashboard']}
              style={{ height: '100%' }}
              items={items2}
            />
            <Button
              type='text'
              block
              className='collapseBtn'
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}
