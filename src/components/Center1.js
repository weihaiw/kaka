import React from 'react';

export default class Center1 extends React.Component{
  render(){
    let name = this.props.name
    return(
      <div>
        <div className="main-w" style={{height:"calc(100vh - 94px)"}}>
          <div className="main" style={{margin:"0 auto",flexGrow:"1"}}>            
            {(name==="wancheng") ? <img style={{width:"100%",height:"536px"}} src={require("./images/u894.png")} alt="home"/> : 
              ((name==="fabu") ? <img style={{width:"100%",height:"536px"}} src={require("./images/u676.png")} alt="home"/> : 
                ((name==="shoucang") ? <img style={{width:"100%",height:"536px"}} src={require("./images/u918.png")} alt="home"/> :
                  <img style={{width:"100%",height:"536px"}} src={require("./images/u566.jpg")} alt="home"/>
              ))}  
          </div>
        </div>
      </div>
    )
  }
}
