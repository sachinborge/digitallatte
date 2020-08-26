import React from 'react';
import { Link } from 'react-router-dom';

  
  class Menu extends React.Component {  
    constructor(){
      super();
    this.state = {
        style:"menu",
        menuStatus:"open",
        setOPen: ''
    }}
    handleClick = () => {
      console.log("before clicked"+ this.state.setOPen);
      // switch(this.state.menuStatus)
      // {
      //   case "open":    
      //   {this.setState({
      //       menuStatus:"close",
      //       style:"menu active"
      //     })}
      //     break;
      //   case "close":
      //   {this.setState({
      //       menuStatus:"open",
      //       style:"menu"
      //     })}
      //     break;
      // } 
      if (this.state.menuStatus === 'open') {
        this.setState({
                menuStatus:"close",
                style:"menu active",
                setOPen: true
              })
      } else {
       this.setState({
                menuStatus:"open",
                style:"menu", 
                setOPen: false
              })
        
      }
    }
    
   
    render() {
      return (      
        <div style={{position:"fixed",zIndex:"1"}}>
              <div className="logo">
                <Link to="/">
                    <img className="b" src={require('../img/logo.png')} alt="Digital Latte a creative digital agency" />
                </Link>
                <Link to="/" >
                  <img className="lend" src={require('../img/logo_strip.png')} alt="Social Media Marketing Company" />
                </Link>
              </div>
          <div id="menuToggle">
            <input onClick={this.handleClick} type="checkbox"  checked={this.state.setOPen} />
            <span></span>
            <span></span>
          </div>
          <div className={this.state.style}>               
            
              {/* {navLinks.map(({ url, name }) => (
                <li>
                  <a href={url}>{name}</a>
                </li>
              ))} */}
            <ul>
        <li>
        <Link  onClick={this.handleClick} to="/">Home</Link>
        </li>
        <li>
        <Link onClick={this.handleClick} to="/about">Who we are</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/OurMotto">Our Motto</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/expertise">Our Expertise</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/clientele">Clientele</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/case_studies">Case Studies</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/blogs">Blogs</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/careers">Career</Link>
        </li>
        <li>
        <Link  onClick={this.handleClick}  to="/contact">Contact Us</Link>
        </li>
      </ul>
          </div>
        </div>
      );
    }
  }
  

  export default Menu