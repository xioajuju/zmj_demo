import React, { Component } from 'react'
import './index.css'

export default class PicDiv extends Component {
// /assets/apic.png 是根目录下，不用在  ../../../ 这样相对路径在页面渲染完的时候，就找不到那个位置了
  render() {
    return (
      <div className='PicDiv_box'>
        <div><img src="/assets/apic.png" alt=""  width={"290px"} height={"163px"}/></div>
        <div className="PicDiv_name">     2020前端技术的发展趋势</div>
        <div className='PicDiv_descripe'>      介绍Hzero前端开发的流程及规范，助力开发</div>
        <div><img src="/assets/abofang.png" alt='图片'   width={"12px"} height={"10px"} style={{marginLeft:"5px"}}/> <span className='PicDiv_plays'>  1286次播放 </span > <span className='PicDiv_num'>12节</span></div>
      </div>
    )
  }
}
