import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Modal, Tag, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface StoreUserProps {
    id?: string;
    title?: string;
    buttonText?: string;
}

const StoreUser = (props: StoreUserProps) => {
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
                    <Form.Item label='Code' name='code'
                        rules={[{ required: true, message: 'Please input name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Long' name='Long'
                        rules={[{ required: true, message: 'Please input name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label='Lat' name='Lat'
                        rules={[{ required: true, message: 'Please input name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Address'
                        name='Address'
                        rules={[{ required: true, message: 'Please input address!' }]}
                    >
                        <Input type='addresss' />
                    </Form.Item>
                    <Form.Item
                        label='GST.No'
                        name='GST.No'
                        rules={[{ required: true, message: 'Please input GST.No!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label='Drug Lie No.'
                        name='Drug Lie No'
                        rules={[{ required: true, message: 'Please input Drug Lie No.!' }]}
                    >
                        <Input />
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

export default StoreUser;

