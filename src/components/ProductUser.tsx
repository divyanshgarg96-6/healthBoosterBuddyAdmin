import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Modal, Tag, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface ProductUserProps {
    id?: string;
    title?: string;
    buttonText?: string;
}

const ProductUser = (props: ProductUserProps) => {
    const { title, buttonText, id } = props;
    const [visible, setVisible] = useState(false);
    const [userData, setUserData]: any = useState({});
    const [error, setError] = useState('');
    const [form] = Form.useForm();

    const showModal = () => {
        setVisible(true);
    };
    const onFinish = (values: any) => {
        setVisible(false);
    };

    const onValuesChange = () => {
        setError('');
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Button type='primary' onClick={showModal}>
                {buttonText}
            </Button>
            <Modal
                width='1000px'
                title={title}
                visible={visible}
                footer={null}
                maskClosable={false}
                closeIcon={null}
            >
                <Form
                    form={form}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout='horizontal'
                    name='userForm'
                    onFinish={onFinish}
                    onValuesChange={onValuesChange}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                >
                    <Form.Item label='Active' name={'isActive'} valuePropName='checked'>
                        <Checkbox></Checkbox>
                    </Form.Item>
                    <Form.Item
                        label='Name'
                        name='Name'
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Code'
                        name='code'
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Price'
                        name='Price'
                        rules={[{ required: true, message: 'Please input Price!' }]}
                    >
                        <Input type='Prices' />
                    </Form.Item>
                    <Form.Item
                        label='Status'
                        name='Status'
                        rules={[{ required: true, message: 'Please input Status!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label='Upload Profile'
                        name='profilePicture'
                        rules={[
                            { required: true, message: 'Please select a profile photo!' },
                        ]}
                    >
                        <Upload listType='picture-card'>
                            <button style={{ border: 0, background: 'none' }} type='button'>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    {error && (
                        <Tag className='full-width-err' bordered={false} color='error'>
                            {error}
                        </Tag>
                    )}
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className='submit-button' type='primary' htmlType='submit'>
                            Submit
                        </Button>
                        <Button
                            className='cancel-button'
                            htmlType='reset'
                            onClick={() => setVisible(false)}
                        >
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
};

export default ProductUser;

