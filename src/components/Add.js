import React from 'react';
import AddHeader from './AddHeader.js'
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}
let styleP={
  backgroundColor:"rgba(244, 244, 244, 1)",
  fontSize:"14px",
  lineHeight:"30px",
  display:"inline-block",
  width:"106%",
  marginLeft:"-3%",
  paddingLeft:"3%"
}
let divP={
  paddiing:"0 3%",
  borderBottom:"1px solid #ccc",
  lineHeight:"35px",
  color:"#999"
}
let divspan={
  display:"inline-block",
  width:"25%",
  textAlign:"center"
}
export default class Add extends React.Component{
  render(){
    let prop = this.props.history;
    return(
      <div>
        <div className="main-w">
          <AddHeader prop={prop}/>
          <div className="main">
            <input style={{width:"94%",fontSize:"12px",lineHeight:"30px",padding:"0 10px",margin:"8px 3%"}} placeholder="输入城市名或者拼音查询" />
            <Tabs defaultActiveKey="1" onChange={callback} 
              style={{width:"100%",padding:"0 3%",backgroundColor:"#fff"}}>
              <TabPane tab="国内" key="1">
                <p style={styleP}>根据您的位置推荐</p>
                <div><p style={{...divP,borderBottom:"0"}}><span style={divspan}>北京</span></p></div>
                <p style={styleP}>热门城市</p>
                <div>
                  <p style={divP}><span style={divspan}>北京</span><span style={divspan}>天津</span><span style={divspan}>无锡</span><span style={divspan}>景德镇</span></p>
                  <p style={divP}><span style={divspan}>沈阳</span><span style={divspan}>杭州</span><span style={divspan}>大连</span><span style={divspan}>成都</span></p>
                  <p style={divP}><span style={divspan}>郑州</span><span style={divspan}>武汉</span><span style={divspan}>宁波</span><span style={divspan}>青海</span></p>
                  <p style={{...divP,borderBottom:"0"}}><span style={divspan}>广州</span><span style={divspan}>西安</span><span style={divspan}>海南</span><span style={divspan}>郑州</span></p>
                </div>
                <p style={styleP}>A</p>                
                <div>
                  <p style={divP}><span style={{...divspan,textAlign:"left"}}>鞍山</span></p>
                  <p style={divP}><span style={{...divspan,textAlign:"left"}}>安庆</span></p>
                  <p style={divP}><span style={{...divspan,textAlign:"left"}}>安阳</span></p>
                  <p style={divP}><span style={{...divspan,textAlign:"left"}}>安平县</span></p>
                  <p style={{...divP,borderBottom:"0"}}><span style={{...divspan,textAlign:"left"}}>安吉县</span></p>
                </div>
              </TabPane>
              <TabPane tab="国外" key="2">
                <p style={styleP}>根据您的位置推荐</p>
                <div><p style={{...divP,borderBottom:"0"}}><span style={divspan}>北京</span></p></div>
                <p style={styleP}>历史记录</p>
                <div>
                  <p style={{...divP,borderBottom:"0"}}><span style={divspan}>北京</span><span style={divspan}>深圳</span><span style={divspan}>上海</span></p>
                </div>
                <p style={styleP}>日韩</p>                
                <div>
                  <p style={divP}><span style={divspan}>首尔</span><span style={divspan}>东京</span><span style={divspan}>京都</span><span style={divspan}>名古屋</span></p>
                  <p style={divP}><span style={divspan}>日本</span><span style={divspan}>韩国</span><span style={divspan}>釜山</span><span style={divspan}>济州岛</span></p>
                  <p style={divP}><span style={divspan}>箱根</span><span style={divspan}>冲绳</span><span style={divspan}>福冈</span><span style={divspan}>北海道</span></p>
                  <p style={{...divP,borderBottom:"0"}}><span style={divspan}>奈良</span><span style={divspan}>西安横店</span><span style={divspan}>大阪</span></p>                  
                </div>
                <p style={styleP}>欧洲</p>                
                <div>
                  <p style={divP}><span style={divspan}>英国</span><span style={divspan}>伦敦</span><span style={divspan}>京都</span><span style={divspan}>爱订报</span></p>
                  <p style={divP}><span style={divspan}>法国</span><span style={divspan}>罗马</span><span style={divspan}>釜山</span><span style={divspan}>意大利</span></p>
                  <p style={divP}><span style={divspan}>柏林</span><span style={divspan}>德国</span><span style={divspan}>福冈</span><span style={divspan}>威尼斯</span></p>
                  <p style={divP}><span style={divspan}>法兰克福</span><span style={divspan}>佛洛伦萨</span><span style={divspan}>慕尼黑</span><span style={divspan}>阿姆斯特丹</span></p>                  
                  <p style={{...divP,borderBottom:"0"}}><span style={divspan}>巴塞罗那</span><span style={divspan}>马塞利</span><span style={divspan}>西班牙</span><span style={divspan}>土耳其</span></p>                  
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}
