import React from 'react';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import marked from 'marked';
import gljs from 'highlight.js';
export default class Post extends React.Component{
  constructor(){
    super();
    this.state={
      data: '',
      wait:true
    }
  }
  componentDidMount(){
    let name = this.props.match.params.title;
    console.log(name)
    axios.get(`https://raw.githubusercontent.com/newming/demodata/master/blog/${name}.md`)
      .then( res => this.setState({data:res.data,wait:false}))
      .catch( err => alert(err));
    marked.setOptions({
      highlight: function (code) {
        return gljs.highlightAuto(code).value;
      }
    });
  }
  render(){
    console.log(this.props)
    
    return(
      <div style={{opacity:"1",width:"100%"}}>
        <div>
          {
            this.state.wait ? <Spin tip="Loading..."></Spin> : 
            <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} className="post-content"/>          
          }
        </div>
      </div>
    )
  }
}
