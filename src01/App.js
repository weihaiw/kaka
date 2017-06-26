import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import {
  HashRouter,
  Route
} from 'react-router-dom'
import Home from './components/Home.js'
import Blog from './components/Blog.js'
import Work from './components/Work.js'
import About from './components/About.js'
import Post from './components/Post.js'
import LeftNav from './components/leftNav.js'
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      mobile:true
    }
  }
  componentWillMount(){
    let winW = document.body.clientWidth;
    if(winW > 700){this.setState({mobile:false})}
  }
  componentDidMount(){
    window.onresize = () =>{
      document.body.clientWidth > 700 ? this.setState({mobile:false}):
        this.setState({mobile:true})
    }
  }
  render(){
    return(
      <HashRouter>
        <div className="my-wrap">
          {this.state.mobile ? <Header/> : <LeftNav />}
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/post/:title" component={Post} />
          </div>
          {this.state.mobile ? <Footer/> : null}
        </div>      
      </HashRouter>
    )
  }
}
