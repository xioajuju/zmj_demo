import React, { Component } from 'react'

import { BellOutlined } from '@ant-design/icons';
import Nav from '../Nav/index.jsx'
import './index.css'



const Header = () => {
    return (
        <div className='Hea_box'>
          <ul>   
            <li><div className='nav_pic'></div> </li>     
            <li>
                 <div><Nav name="应用市场"/></div> 
             </li><li>
                   <div><Nav name="开发者"/></div>
             </li><li>
                <div><Nav name="社区与合作伙伴"/></div>
             </li><li>
                <div><Nav name="支持与服务"/></div>
              </li><li>
                   <div><Nav name="运营与管理"/></div>
              </li><li>
                <div className='nav_r'>
                    <BellOutlined />
                 </div>
                </li>
           </ul>
        </div>
      )
  };
  
  export default Header;


