import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    users: [],
    keyWordisErr: "",
    keyword: "",
  };

  componentDidMount = () => {
    //  我们把token定义在这个组件身上，我们就能this.token在其他地方拿到了
    this.token = PubSub.subscribe("MY TOPIC", (_, data) => {
      // 前面的 _ 占位符，因为这个参数就是传过来的'MY TOPIC'，但是在这里没用
      console.log("List收到了来自Search组件的消息：", data);
      this.setState(data);
    });
  };
  componentWillUnmount() {
    // 组件消去的时候，就取消订阅
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { users, isErr, keyWord } = this.state;
    // 下面照片地址哪里注意不能再写  "../../../public/assets/apic.png"  这个是一个相对地址，所以当页面加载出来的时候，找不到这个图片
    //  当页面在浏览器打开的时候，我们可以 public 看出一个本地服务器，我们在这里面拿数据  所以地址是  "/assets/apic.png"
    console.log("list组建中验证是否拿到keyword：", keyWord);
    return (
      <div className="Route_box">
        <div className="content ">
          <div>
            <div className="List_sum">
              <span className="List_sum_font ">
                {"共找到"}{" "}
                <span className="card_descript_200">{users.length}</span>
                {"个“"} <span className="card_descript_200">{keyWord}</span>
                {"”相关视频"}
              </span>
            </div>
            {isErr ? (
              <h3 style={{ color: "red" }}>{isErr}</h3>
            ) : (
              users.map((usersObj) => {
                return (
                  <div key={usersObj.id}>
                    <div className="card" >
                      <div className="card_l">
                        <div className="List_pic">
                          <img
                            alt="head_portrait"
                            src={usersObj.pic_url}
                            style={{ width: "273px", height: "153px" }}
                          />
                        </div>
                        <div className="card_l_font">{usersObj.plays} </div>
                      </div>
                      <div className="card_r">
                        <p className="card_name">
                          <span className="card_name_200">
                            {usersObj.name.substring(0, 4)}
                          </span>
                          {usersObj.name.slice(4)}
                        </p>
                        <div>
                          {" "}
                          <span className="card_type">
                            {" "}
                            <span className="card_type_font">
                              {usersObj.type}
                            </span>
                          </span>{" "}
                          <span className="card_trainingType">
                            <span className="card_trainingType_font">
                              {usersObj.trainingType}
                            </span>
                          </span>
                        </div>
                        <div>
                          <div className="card_descript">
                            <span className="card_descript_200">
                              {usersObj.descript.substring(0, 4)}
                            </span>
                            {usersObj.descript.slice(4)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}
