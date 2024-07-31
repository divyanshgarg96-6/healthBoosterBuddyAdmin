// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '../assets/HBLogo.jpeg';
import '../styles/login.css';
import api from '../interceptors/interceptor';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    // api.post('user/login', values).then((response) => {
    //   console.log(response.data.session);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('token', 'dfhjgkhj');
    // });
    // console.log('Success:', values);
      navigate('/page/dashboard');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='container'>
      <div className='formContainer'>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <img src={logo} className='imageLogo' />
          <h1
            className='ant-typography css-1qhpsh8'
            style={{ fontSize: '24px' }}
          >
            Sign in
          </h1>
          <span
            className='ant-typography css-1qhpsh8'
            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
          >
            Welcome back to Health Booster Buddy Admin! Please enter your
            details below to sign in.
          </span>
        </div>
        <Form
          name='loginForm'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
