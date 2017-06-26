import React from 'react';


export default class AddHeader extends React.Component{
  render(){
    return(
      <header>
        <a onClick={() => this.props.prop.goBack()}><img style={{width:"20px",verticalAlign: "middle",marginLeft:"5px",marginTop: "-8px"}} 
          src={require('./images/u103.png')}  alt="a"/>
        </a>      
        <h1>选择城市</h1>
        <a></a> 
      </header>
    )
  }
}
