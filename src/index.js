import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import App from './routes/App';

import './styles/GlobalStyles.css';

ReactDOM.render(
  <ConfigProvider locale={esES}>
    <App />
  </ConfigProvider>,
  document.getElementById('app')
);
