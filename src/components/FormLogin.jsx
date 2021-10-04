import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import Spinner from './Spinner';
// Services
import LoginService from '../services/LoginService';

const FormLogin = (props) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    LoginService.login(values)
      .then((response) => {
        if (response) {
          props.setToken(response.data.access_token);
          window.location.href = '/movies';
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error && error.response && error.response.status === 404) {
          toastr.error('Este usuario no existe.');
        } else {
          toastr.error('Ha ocurrido un error al loguearse.');
        }

        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Por favor ingresa tu contraseña' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default FormLogin;
