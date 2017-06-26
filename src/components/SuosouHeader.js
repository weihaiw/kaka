import React from 'react';

export default class SuosouHeader extends React.Component{
  render(){
    return(
      <header>
        <input type="text" placeholder="请输入关键字" style={{height: "25px",fontSize:"13px",color:"#ccc",width:"90%"}}/>
        <button onClick={() => this.props.prop.goBack()} 
          style={{color:"#fff",fontSize:"14px",fontWeight:"blod",border:"0",backgroundColor:"rgba(255,255,225,0)"}}>取消
        </button>
      </header>
    )
  }
}
