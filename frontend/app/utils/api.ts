import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/crypto',
});

export const fetchStockData = async (stockName: string) => {
  const response = await api.get(`/${stockName}`);
  return response.data;
};
