import React, {  useState } from "react";
import PicDiv from '../PicDiv'
import { Pagination } from 'antd';
import "./index.css";
import { Row, Col } from "antd";

const ShowPage = () => {
  const [isProductActive, setIsProductActive] = useState("all");
  const productItem = [
    {
      id: "all",
      name: "全部产品",
    },
    {
      id: "productId1",
      name: "飞猪Feida",
    },
    {
      id: "productId2",
      name: "汉得协同制造软件",
    },
    {
      id: "productId3",
      name: "汉得智能合同管理软件",
    },
    {
      id: "productId4",
      name: "虹珊瑚",
    },
    {
      id: "productId5",
      name: "汉得运营管理软件",
    },
    {
      id: "productId6",
      name: "汉得智慧财务套件软件",
    },
    {
      id: "productId7",
      name: "汉得运输管理软件",
    },
    {
      id: "productId8",
      name: "汉得清分结算软件",
    },
    {
      id: "productId9",
      name: "海马汇HIPPLUS",
    },
  ];

  

  // 控制切换item的
  const handleCheckItem = (id) => {
    setIsProductActive(id);
  };
  return (
    <div className="Route_box">
    <div className="ShowPage_box content">
      <div className="howPage_l">
        {productItem.map((item) => {
          return (
            <div
              key={item.id}
              className={`product-list-item ${
                isProductActive === item.id ? "product-item-active" : ""
              }`}
              onClick={() => handleCheckItem(item.id)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="howPage_r">
        <div className="video-category-list">视频分类</div>
        {/*这里就flex布局实现三栏布局 */}
        <div className="video-list">
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div ><PicDiv/></div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div ><PicDiv/></div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div><PicDiv/></div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div ><PicDiv/></div>
            </Col>
          </Row>
        </div>
      </div>
    </div >
    <div className='FooterPage_box'><Pagination defaultCurrent={1} total={50}/></div> 
     </div> 
  );
};

export default ShowPage;
