'use client'

import { Provider } from 'react-redux';
import { store } from './store';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <AntdRegistry>
      {children}
      </AntdRegistry>
    </Provider>
  );
}
