import React from 'react';
import { MehOutlined } from '@ant-design/icons';

import '../styles/components/NotRegisters.css';

const NotRegisters = () => {
  return (
    <div className="div-not-registers">
      <MehOutlined />
      <h6>No hay registros</h6>
    </div>
  );
};

export default NotRegisters;
