import React from 'react';
import { Spin } from 'antd';
import '../styles/components/Spin.css';

const Spinner = () => {
  return (
    <div className="div-spin">
      <Spin />
    </div>
  );
};

export default Spinner;
