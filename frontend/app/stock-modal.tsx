'use client'

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Select, Button } from 'antd';
import { setSelectedStock } from './features/stockSlice';
import { RootState } from './features/stockStore';

const stocks = ['bitcoin', 'ethereum', 'litecoin', 'dogecoin', 'binancecoin'];

const StockModal: React.FC = () => {
  const dispatch = useDispatch();
  const selectedStock = useSelector((state: RootState) => state.stock.selectedStock);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onStockChange = async (stock: string) => {
    dispatch(setSelectedStock(stock));
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Change Stock
      </Button>
      <Modal
        title="Select Stock"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Select
          showSearch
          placeholder="Select a stock"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={stocks.map(stock => ({ value: stock, label: stock }))}
          onChange={onStockChange}
          value={selectedStock}
          style={{ width: '100%' }}
        />
      </Modal>
    </div>
  );
};

export default StockModal;
