import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileTextOutlined,
  UserOutlined,
  PieChartOutlined,
  BellOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Input, Layout, Menu, Row, Typography, theme } from 'antd';
import FetchData from "../FetchData/FetchData"
const { Header, Sider } = Layout;

function DashBoardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout theme='light'>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              // icon: <UserOutlined />,
              label: 'DTD'
            },
            {
              key: '2',
              icon: <PieChartOutlined />,
              label: '',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              // label: 'nav 3',
            },
            {
              key: '4',
              icon: <FileTextOutlined />,
              label: '',
            },
          ]}
        />
        {/*  */}
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Col span={9} >
              <div style={{ fontSize: 20, flex: 1 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                }
                )}
              </div>
            </Col>
            <Col span={6} style={{ display: 'flex' }}>

              <div style={{ marginRight: "15px" }} ><Avatar size='default' icon={<BellOutlined />}></Avatar> </div>
              <div style={{ marginRight: "15px" }}><Avatar size='default' icon={<InfoCircleOutlined />}></Avatar>  </div>
              <div style={{ marginRight: "15px" }}>Nguyễn Huy Hoàng </div>
              <div style={{ marginRight: "15px" }}><Avatar size='default' icon={<UserOutlined />}></Avatar>  </div>
            </Col>
          </Row>
        </Header>

        <Row style={{margin:"40px 20px 40px 20px"}}>
        <Col span={4}>
          <Typography.Title style={{ fontSize: 30, fontWeight: 700 }} >Dash Board</Typography.Title>
          </Col>
          <Col span={4}>
            <Input.Search placeholder='Tìm kiếm' />
          </Col>
        </Row>



        <Row>
          <Col span={8}>
            <Card style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: "#ED712E"
            }}
            >
              <Typography.Title level={1} style={{ fontSize: 24 }} >Danh thu ngày</Typography.Title>
            </Card>
          </Col>

          <Col span={8}>
            <Card style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
            >
              <Typography.Title level={1} style={{ fontSize: 24 }}>Tổng quan</Typography.Title>
            </Card>
          </Col>
        </Row>
        <Row >

            <FetchData />

        </Row>
      </Layout>
    </Layout>
  );
}

export default DashBoardPage;





