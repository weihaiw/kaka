import React from 'react';
let spana=[
  {jifen:"10积分"},
  {jifen:"30积分"},
  {jifen:"50积分"},
  {jifen:"200积分"},
  {jifen:"500积分"},
  {jifen:"1000积分"}
]
let span;

export default class Center2 extends React.Component{
  handleClick(){
    console.log(span)
    span.style.backgroundColor = "red"

  }
  render(){
    console.log(this.props)
    return(
      <div>
        <div className="main-w" style={{height:"calc(100vh - 94px)"}}>
          <div className="main" style={{padding:"0 3%",width:"94%",margin:"0 auto"}}>            
            <p style={{fontSize:"15px",lineHeight:"43px"}}>10元=100积分</p>
            <p style={{fontSize:"15px",lineHeight:"43px"}}>选择充值面额</p>
            <p>
              {
                spana.map((item,index) => (
                  <span ref={node => {span = this.node}} onClick={this.handleClick.bind(this)} key={index} style={{display:"inline-block",border: "1px solid red",padding:"3px 15px",margin:"10px 10px 10px 0",marginTop:"10px",borderRadius:"8px"}}>
                    {item.jifen}
                  </span>          
                ))
              }
            </p>
            <p>其他:  
              <input style={{border:"1px solid red",lineHeight:"25px",borderRadius:"5px",width:"80px",margin:"0 15px 0 8px"}}/>
              积分
            </p>
            <p style={{fontSize:"15px",lineHeight:"43px"}}>选择支付方式</p>
            <p>
              <span style={{display:"inline-block",border: "1px solid red",padding:"3px 15px",margin:"10px 10px 10px 0",marginTop:"10px",borderRadius:"8px"}}>微信支付</span>
              <span style={{display:"inline-block",border: "1px solid red",padding:"3px 15px",margin:"10px 10px 10px 0",marginTop:"10px",borderRadius:"8px"}}>支付宝支付</span>
            </p>
            <p>支付金额:  20元</p>
            <button onClick={() => this.props.prop.history.goBack()} style={{backgroundColor:"red",width:"80%",margin:"40px 10% 0 10%",lineHeight:"43px",color:"#fff",borderRadius:"10px"}}>确定</button>
          </div>
        </div>
      </div>
    )
  }
}
