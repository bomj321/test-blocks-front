import React from 'react';
import { Layout, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import '../styles/containers/Login.css';

import FormLogin from '../components/FormLogin';

const { Header, Footer, Content } = Layout;

const Login = ({ setToken }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content className="content-login">
        <Row>
          <Col
            xs={{ span: 14, offset: 5 }}
            sm={{ span: 14, offset: 4 }}
            md={{ span: 8, offset: 7 }}
            lg={{ span: 8, offset: 7 }}
          >
            <FormLogin setToken={setToken} />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Test Blocks @2021 Created by José ortega
      </Footer>
    </Layout>
  );
};

export default Login;
