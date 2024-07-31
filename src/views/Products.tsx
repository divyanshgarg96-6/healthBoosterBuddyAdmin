import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import ProductUser from '../components/ProductUser';
import { useNavigate } from 'react-router-dom';

interface DataType {
    key: string;
    name: string;
    code: number;
    price: number;
    status: string;
    quantity: number;
}
const Products: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [modal, contextHolder] = Modal.useModal();
    const navigate = useNavigate();

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, record) => (
                <a onClick={() => navigate(`/page/productdetails/${record.key}`)}>
                    {value}
                </a>
            ),

        },
        {
            title: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size='middle'>
                    <ProductUser id={record.key} title={'Update User'} buttonText={'Edit'} />
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
                price: 2334,
                status: 'out of stock',
                quantity: 2,
            },
            {
                key: '2',
                name: 'Jim Green',
                code: 332,
                price: 5334,
                status: 'out of stock',
                quantity: 3,
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 302,
                price: 1334,
                status: 'Available',
                quantity: 5,
            },
            {
                key: '1',
                name: 'John Brown',
                code: 372,
                price: 6334,
                status: 'out of stock',
                quantity: 2,
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 302,
                price: 1734,
                status: 'Available',
                quantity: 5,
            },
            {
                key: '2',
                name: 'Jim Green',
                code: 332,
                price: 5334,
                status: 'out of stock',
                quantity: 1,
            },
            {
                key: '3',
                name: 'Joe Black',
                code: 392,
                price: 1334,
                status: 'Available',
                quantity: 4,
            },
        );


        const start = () => {
            setLoading(true);
            // ajax request after empty completing
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
                            <ProductUser id={'record.key'} title={'Add User'} buttonText={'Add'} />
                        </Space>
                    </Button>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    };
}

export default Products;