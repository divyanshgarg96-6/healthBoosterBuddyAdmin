import React from 'react';
import "../App.css"
import profile from '../assets/profile.png';
import { Button, Card, Col, Row } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

function UserDetails() {
  const deliveredGlasses = 5;
  const scheduledGlasses = 2;
  const totalIncome = 50;
  return (

    <div className="user-details">
      <h2>User Details</h2>
      <br />
      <Row>
        <Col span={8}> <img src={profile} />
          <h4>John Brown</h4>
          <p>Selected Address: New York No. 1 Lake Park</p></Col>
        <Col span={8} offset={8}>
          <button className='btn1'>End Subscription</button>
          <br />
          <button className='btn2'>Cancel Immediately</button>
          <br />
          <button className='btn3'>Subscribe</button>
        </Col>
      </Row>
      <Card className='m-10' title='User Stats'>
        <Card.Grid>
          Number of glasses delivered<p>5</p>
        </Card.Grid>
        <Card.Grid>
          Number of scheduled glasses <p>2</p>
        </Card.Grid>
        <Card.Grid>
          Total income<p>₹ 50</p>
        </Card.Grid>
      </Card>
      <Card className='m-10'>
        <div className='custom-card-address'>
          <h3>Address List :</h3>
          <ul>
            <li>
              New York No. 1 Lake Park
              <span>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <EditOutlined />
                </Button>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <DeleteOutlined />
                </Button>
              </span>
            </li>
            <li>
              New York No. 1 Lake Park
              <span>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <EditOutlined />
                </Button>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <DeleteOutlined />
                </Button>
              </span>
            </li>
            <li>
              New York No. 1 Lake Park
              <span>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <EditOutlined />
                </Button>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <DeleteOutlined />
                </Button>
              </span>
            </li>
            <li>
              New York No. 1 Lake Park
              <span>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <EditOutlined />
                </Button>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <DeleteOutlined />
                </Button>
              </span>
            </li>
            <li>
              New York No. 1 Lake Park
              <span>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <EditOutlined />
                </Button>
                <Button
                  className='m-5'
                  size='small'
                  type='primary'
                  shape='circle'
                >
                  <DeleteOutlined />
                </Button>
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </div>

  );
}

export default UserDetails;