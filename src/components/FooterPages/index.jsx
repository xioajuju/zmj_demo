import React, { Component } from 'react'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

import'./index.css'

export default class FooterPages extends Component {
  render() {
    return (
      <div className='FooterPage_box'><Pagination defaultCurrent={1} total={50}/></div>
    )
  }
}
