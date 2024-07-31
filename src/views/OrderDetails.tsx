import React, { useState } from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';
import store1 from '../assets/store1.jpg';
import store from '../assets/store.jpg';
import { Col, Row } from 'antd';
import { Divider, Radio, Table } from 'antd';
import type { TableColumnsType } from 'antd';



const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',

};
interface DataType {
    key: React.Key;
    productname: string;
    id: number;
    price: string;
    quantity: number;
    total: string;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'ProductName',
        dataIndex: 'productname',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
    },
    {
        title: 'Total',
        dataIndex: 'total',
    },
];
const data: DataType[] = [
    {
        key: '1',
        productname: ' Brown',
        id: 32,
        price: '₹1123',
        quantity: 3,
        total: '₹3369',
    },
    {
        key: '2',
        productname: 'Green',
        id: 42,
        price: '₹2299',
        quantity: 1,
        total: '₹2299',
    },
    {
        key: '3',
        productname: 'Joe Black',
        id: 32,
        price: '₹899',
        quantity: 2,
        total: '₹1798',
    },
    {
        key: '4',
        productname: 'Disabled ',
        id: 99,
        price: '₹999',
        quantity: 4,
        total: '₹3996',
    },
];
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

};

function OrderDetails() {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return (
        <>
            <h2>View Order Details</h2>
            order on june 26,2022 | order #1026-29MLVS-2610809
            <div>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                />



                <div><h3>Jequlin Parmacy</h3>
                    Address: Block A,sector 16,Noida
                    <br />
                    Phone No: 95578xxxxx , Email-abc@gmail.com
                    <br />
                    GSTIN-26MS10LVMAY29
                    <br />
                    Dl No:20C VAD 94560, 20D VAD 93441 Dated 20 Mar 2000
                </div>
                <Row>
                    <Col span={8}>
                        <h5>  Shipping Address</h5>
                    </Col>
                    <Col span={8}> <h5>  Payment Method</h5></Col>
                    <Col span={8}> <h5> Order Summary</h5></Col>
                </Row>
                <Row>
                    <Col span={6}>Address: Block A,sector 16,Noida<br />
                        Phone No: 95578xxxxx ,<br />
                        Email-abc@gmail.com
                    </Col>
                    <Col span={6}>Visa ****1111(Amazon Pay)
                    </Col>
                    <Col span={6}>  Item(s) Subtotal:<br />
                        Shipping & Handling:<br />
                        Total before tax:<br />
                        Estiamated tax to be<br />
                        collected:
                    </Col>
                    <Col span={6}> ₹46.87<br />₹5.99<br />
                        ₹56.87<br />₹4.27<br />
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default OrderDetails;