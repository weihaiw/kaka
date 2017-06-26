import React from 'react';
import FindHeader from './FindHeader.js'
import Icon from 'antd/lib/icon'
import {Link} from 'react-router-dom'

export default class My extends React.Component{
  render(){
    return(
      <div>
        <div className="main-w">
          <FindHeader />
          <div className="main">            
              <div className="my" style={{backgroundImage:`url(${require("./images/u62.png")})`}}>
                <img alt="my" src={require("./images/chen_xx___u103.svg")}/>
                <span> <Icon type="calendar" />签到</span>
                <p>18733525639</p>
                <Link to={"/center/mingpian"}><p><span>我的名片</span></p></Link>
              </div>
              <div className="link">
                <Link to={"/center/zhanghu"}><p><img alt="my" src={require("./images/球球.png")}/><span>我的账户</span></p></Link>
                <Link to={"/center/chongzhi"}><p><img alt="my" src={require("./images/raw.png")}/><span>积分充值</span></p></Link>
              </div>
              <div className="link">
                <Link to={"/center/wancheng"}><p><img alt="my" src={require("./images/wet.png")}/><span>已完成任务</span></p></Link>
                <Link to={"/center/fabu"}><p><img alt="my" src={require("./images/yytr.png")}/><span>已发布任务</span></p></Link>
                <Link to={"/center/shoucang"}><p><img alt="my" src={require("./images/ygs.png")}/><span>我的收藏</span></p></Link>
                
              </div>
              <div className="link">
                <Link to={"/center/yijian"}><p><img alt="my" src={require("./images/tyt.png")}/><span>意见反馈</span></p></Link>
                <Link to={"/center/about"}><p><img alt="my" src={require("./images/wqee.png")}/><span>关于我们</span></p></Link>
                <Link to={"/center/shezhi"}><p><img alt="my" src={require("./images/essa.png")}/><span>设置</span></p></Link>
                
              </div>
          </div>
        </div> 
      </div>
    )
  }
}
