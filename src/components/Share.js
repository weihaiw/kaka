import React from 'react';
export default class Share extends React.Component{
  constructor(){
    super()
    this.state={
      click:true
    }
  }
  bindleClick(){
    this.setState({click:!(this.state.click)})  
  }
  bindleClicks(e){
    e.stopPropagation()
  }
  render(){
    return(
      <div onClick={this.bindleClick.bind(this)}>
        {this.state.click ?  
          <div className="share">
            <div className="share-n" onClick={this.bindleClicks.bind(this)}>
              <p>
                <img alt="share" src={require("./images/资源 1.png")}/>
                <span>分享到
                  <span>
                    <img alt="share" src={require("./images/we.png")}/>
                    <img alt="share" src={require("./images/wqe.png")}/>
                    <img alt="share" src={require("./images/wq.png")}/>
                  </span>
                </span>
              </p>
              <p>
                <img alt="share" src={require("./images/资源 2.png")}/>
                <span>收藏</span>
              </p>
              <p>
                <img alt="share" src={require("./images/资源 3.png")}/>
                <span>隐藏此动态</span>
              </p>
              <p>
                <img alt="share" src={require("./images/资源 4.png")}/>
                <span>不看他的动态</span>
              </p>
              <p>
                <img alt="share" src={require("./images/资源 5.png")}/>
                <span>举报</span>
              </p>
            </div>
          </div> : "" 
        }
      </div>
    )
  }
}
