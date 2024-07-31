import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Space } from 'antd';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import OrderUser from '../components/OrderUser';
import { ExclamationCircleOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    id: number;
    status: string;
    address: string;

}
function Orders() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [modal, contextHolder] = Modal.useModal();
    const navigate = useNavigate();


    const columns: TableColumnsType<DataType> = [
        {
            title: 'Id',
            dataIndex: 'id',
            render: (value, record) => (
                <a onClick={() => navigate(`/page/orderdetails/${record.key}`)}>
                    {value}
                </a>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: ' Address',
            dataIndex: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <OrderUser id={'record.key'} title={'Update User'} buttonText={'Edit'} />
                    <a onClick={() => deleteUser('record.key')}>Delete</a>
                </Space>

            ),
        }
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
                id: 32,
                status: 'out of stock',
                address: 'Delhi',
            },
            {
                key: '2',
                id: 332,
                status: 'out of stock',
                address: 'Haryana',
            },
            {
                key: '3',
                id: 302,
                status: 'Available',
                address: 'Muzzafaranagar',
            },
            {
                key: '1',
                id: 372,
                status: 'out of stock',
                address: 'Noida',
            },
            {
                key: '3',
                id: 302,
                status: 'Available',
                address: 'Rishikesh',
            },
            {
                key: '2',
                id: 332,
                status: 'out of stock',
                address: 'Shamli',
            },
            {
                key: '3',
                id: 392,
                status: 'Available',
                address: 'Punjab',
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
                        <OrderUser id={'record.key'} title={'Add User'} buttonText={'Add'} />
                    </Space>
                </Button>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </div>
    );
};

export default Orders;