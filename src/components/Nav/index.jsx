import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React, { useState } from 'react';

import './index.css'

const Nav = (props) => {
  const { name,downp } = props;
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setVisible(false);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '',
          key: '1',
        },
        {
          label: '',
          key: '2',
        },
        {
          label: '',
          key: '3',
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu} onVisibleChange={handleVisibleChange} visible={visible}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
           <div>{name} <DownOutlined /></div> 
        </Space>
      </a>
    </Dropdown>
  );
};

export default Nav;