import React from 'react';
import {withRouter} from 'react-router-dom'

 class CenterHeader extends React.Component{
  render(){
    let name = this.props.location.pathname;
    name = name.replace("/center/","");
    return(
      <header>           
          <a onClick={() => this.props.history.goBack()}>
            <img style={{width:"20px",verticalAlign: "middle",marginLeft:"5px",marginTop: "-8px"}} 
            src={require('./images/u103.png')}  alt="a"/>
          </a>      
          {(name==="zhanghu") ? <h1>我的账户</h1> : 
            ((name==="chongzhi") ? <h1>积分充值</h1> : 
              ((name==="wancheng") ? <h1>已完成任务</h1> : 
                ((name==="fabu") ? <h1>已发布任务</h1> :
                  ((name==="shoucang") ? <h1>我的收藏</h1> : 
                    ((name==="yijian") ? <h1>意见反馈</h1> : 
                      ((name==="about") ? <h1>关于我们</h1> : 
                        ((name==="about") ? <h1>设置</h1> : <h1>我的名片</h1>)))))))}
          
          {(name==="zhanghu") ? <a style={{height:"22px"}}><img style={{width:"22px"}} alt="center" src={require("./images/1想.png")}/></a> : <a></a>} 
      </header>
    )
  }
}
export default withRouter(CenterHeader)
