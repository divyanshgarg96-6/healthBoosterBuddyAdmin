import React from 'react';
import { Card, Col, Row, Statistic } from 'antd';
import { Chart, CategoryScale, registerables } from 'chart.js';
import { Chart as ChartJS, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../App.css';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Total Orders',
    },
  },
};

export default function Dashboard() {
  Chart.register(CategoryScale);
  Chart.register(...registerables);
  const curr = new Date();
  const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));

  const labels = [];

  for (let index = 0; index < 7; index++) {
    labels.push(
      new Date(curr.setDate(curr.getDate() - curr.getDay() + index))
        .toLocaleString('en-us', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3')
    );
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Total Orders  Recived',
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total Orders Delivered',
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Total Orders Scheduled',
        data: labels.map(() => Math.floor(Math.random() * (1000 - 0 + 1)) + 0),
        backgroundColor: 'rgb(235, 234, 53, 0.5)',
      },
    ],
  };


  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Card title='Total Users' bordered={false}>
            <Statistic title='' value={1128} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title='Total Sales' bordered={false}>
            <Statistic title='' value={112893} precision={2} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title='Total Commission' bordered={false}>
            <Statistic title='' value={1128} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title='Total Stores' bordered={false}>
            <Statistic title='' value={112893} precision={2} />
          </Card>
        </Col>
      </Row>
      <Bar options={options} data={data} />
    </>
  );
};

