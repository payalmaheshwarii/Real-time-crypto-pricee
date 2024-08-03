'use client'
import StockTable, { DataType } from './stock-table';
import StockModal from './stock-modal';
import axios from 'axios';
import useSWR from 'swr'
import { useSelector } from 'react-redux';
import { RootState } from './features/stockStore';

const refreshInterval = 10000

export default function Home() {
  const selectedStock = useSelector((state: RootState) => state.stock.selectedStock);
  const fetcher = (...args: [string]) => axios.get(...args).then(res => res.data);

  const { data = [] } = useSWR<DataType[]>(selectedStock ? `http://localhost:5000/api/crypto/${selectedStock}` : null, fetcher, { refreshInterval });

  return (
    <html>
      <body>
        <div>
          <StockModal />
          <StockTable data={data} />
        </div>
      </body>
    </html>
  );
}
