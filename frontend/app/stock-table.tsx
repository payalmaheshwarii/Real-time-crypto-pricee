'use client';

import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

export type DataType = {
  _id: string;
  symbol: string;
  price: string;
  timestamp: string;
};

type PropTypes = {
  data?: DataType[];
};

const StockTable: React.FC<PropTypes> = ({ data = [] }) => {
  const dataSource = data.map((d) => ({
    key: d._id,
    stock: d.symbol,
    price: d.price,
    time: moment(d.timestamp).toLocaleString(),
  }));

  return <Table dataSource={dataSource} columns={columns} />;
};

export default StockTable;
