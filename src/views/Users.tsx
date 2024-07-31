import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import EditUser from '../components/EditUser';
import { Button } from 'antd';
import api from '../interceptors/interceptor';

interface DataType {
  key: string;
  name: string;
  Email: string;
  address: string;
  description: string;
}


export default function Users() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const [filterValues, setFilterValues] = useState({
    searchName: '',
    filterSubscriptions: '',
  });

  useEffect(() => {
    getUserList(filterValues);
  }, []);

  const getUserList = (filter: {
    searchName: string;
    filterSubscriptions: string;
  }) => {
    api
      .get(`api/v1/users?search=${filter.searchName}&where={"role":"USER"}`)
      .then((response) => {
        // console.log(response);

        const userList = response.data.data.map((item: any) => {
          return {
            key: item.id,
            name: `${item.firstName} ${item?.lastName || ''}`,
            subscribe: 'Subscribed',
            address: 'New York No. 1 Lake Park',
          };
        });
        setData(userList);
      });
  };
  const columns: TableColumnsType<DataType> = [

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (value, record) => (
        <a onClick={() => navigate(`/page/userdetails/${record.key}`)}>
          {value}
        </a>
      ),

    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <EditUser id={record.key} title={'Update User'} buttonText={'Edit'} />
          <a onClick={() => deleteUser(record.key)}>Delete</a>
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
    data.push({
      key: '1',
      name: `Edward King ${i}`,
      Email: 'abc32@gmail.com',
      address: `London, Park Lane no. ${i}`,
      description: 'Edit|Delete',
    });
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div >
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="primary" >
          <Space size='middle'>
            <EditUser id={'record.key'} title={'Add User'} buttonText={'Add'} />
          </Space>
        </Button>
      </div>
      <Table
        rowSelection={rowSelection} columns={columns} dataSource={data} />
      {contextHolder}
    </div>


  );
};

