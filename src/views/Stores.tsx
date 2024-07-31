import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import StoreUser from '../components/StoreUser';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    code: number;
    status: string;

}
const Stores: React.FC = () => {
    const navigate = useNavigate();
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [modal, contextHolder] = Modal.useModal();

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, record) => (
                <a onClick={() => navigate(`/page/storedetails/${record.key}`)}>
                    {value}
                </a>
            ),
        },
        {
            title: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <StoreUser id={record.key} title={'Update User'} buttonText={'Edit'} />
                    <a onClick={() => deleteUser(record.key)}>Delete</a>
                </Space>

            ),
        },
    ];
    const deleteUser = (id: string) => {
        // console.log(`deleteUser`);
        modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: 'Are you sure you want to delete the user?',
            okText: 'Ok',
        });
    }

    const data: DataType[] = [];
    for (let i = 0; i < 46; i++) {
        data.push(
            {
                key: '1',
                name: 'John Brown',
                code: 32,
                status: 'out of stock',
            },
            {
                key: '2',
                name: 'Jim Green',
                code: 332,
                status: 'out of stock',
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 302,
                status: 'Available',
            },
            {
                key: '1',
                name: 'John Brown',
                code: 372,
                status: 'out of stock',
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 302,
                status: 'Available',
            },
            {
                key: '2',
                name: 'Jim Green',
                code: 332,
                status: 'out of stock',
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 392,
                status: 'Available',
            },
        );
    }


    const start = () => {
        setLoading(true);
        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
        <div>
            <div style={{ marginBottom: 16 }}>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="primary" >
                    <Space size='middle'>
                        <StoreUser id={'record.key'} title={'Add User'} buttonText={'Add'} />
                    </Space>
                </Button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default Stores;