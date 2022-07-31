import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'
import PubSub from 'pubsub-js'
// import { AudioOutlined } from '@ant-design/icons';
// import { Input, Space } from 'antd';



class Sea extends Component {
  state={
    keyWord:''
  }

  searchM = async () => {
    //  连续结果赋值 + 重命名 value => keyWord
    const { keyWordElement: { value: keyWord } } = this   // 不是this.ref  直接this就行。 ref用于组件内部各个标签间通信，props用于父子组件的同学
    console.log("发送请求的关键字keyWord是:" ,keyWord)
    this.setState({keyWord})
    // this.props.updataApp({ isFirst: false, isLoading: true })
    PubSub.publish('MY TOPIC', { isLoading: true });

    this.props.handleShowListPage(!this.props.ShowListPage)
      console.log("!this.props.ShowListPage传参",!this.props.ShowListPage)
      // console.log(this.props)
      if(this.props.history.location.pathname !== "/home"){
        this.props.history.push("/home")
      }
      
      
 // 发送网络请求----使用fetch发送请求(优化)    ?q=${keyWord}   {method:'GET',body:JSON.stringify(keyWord),headers:{'content-type':'application/json'} }
    try {
      const response = await fetch(`https://www.fastmock.site/mock/9f2afd6c0c999188a71feef67f49ee09/testdata/info?q=${keyWord}`,)
      // this.setState({keyWord:keyWord})
      const data = await response.json()  
      
      PubSub.publish('MY TOPIC', { users: data.users, isLoading: false,keyWord:keyWord });
      // this.keyWordElement.value=''
    } catch (error) {
      PubSub.publish('MY TOPIC', { isLoading: false, isErr: error.message })
    }
    
}

  render() {
    return (
      <div>
        <div className='search_shiping'>视频中心</div>
        <div className='search_font'>帮你快速了解汉得产品，助力交付使用权流程</div>
        <div className='search_lr'>
          <input ref={c => this.keyWordElement = c}  className='search_span_l'   placeholder="        请搜索类别/视频名称" /><button onClick={this.searchM} className='search_span_r'> 搜索</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Sea)