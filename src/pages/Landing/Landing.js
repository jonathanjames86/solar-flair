import React from "react";
import { Link } from "react-router";

class Landing extends React.Component{
  render(){
    const navBar = {width:"95vw", height:"2.5rem", margin:'auto', color:"#fff"};
    const logo = {width:'15rem', height:"150%", backgroundColor:"#2b2b2b", float: "left", cursor:"pointer"};
    const menu = {width:'35rem', height:"100%",  float:"right", display:"flex"};
    const menuItems = {width:"50%", height:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"};
    const menuItem = {fontSize:".75rem", color:"#fff", letterSpacing:"2px", fontWeight:"bolder", cursor:"pointer"};
    const mainText = {width:"60%", height:"25vh", margin:"auto", paddingTop:"14.5%", fontSize:"3rem", letterSpacing:"3px", fontWeight:"bolder", color:"#fff", textAlign:"center"}
    const infoSection = {width:"100%", height:"80vh"};
    const points = {width:"60%", height:"20rem", margin:"auto"};

    return(
      <div>
        <div className="header">
          <div style={navBar}>
            <div style={logo}>LOGO HERE</div>
            <div style={menu}>
              <div style={menuItems}>
                <div style={menuItem}>HOME</div>
                <div style={menuItem}>ABOUT SOLAR</div>
                <div style={menuItem}>BLOG</div>
              </div>
              <div className="lowerBill"> LOWER YOUR POWER BILL
              </div>
            </div>
          </div>
          <div style={mainText}>SMART, EASY, AFFORDABLE&#46;
            <div className="cta">FREE QUOTE</div>
          </div>
        </div>
        <div style={infoSection}>
          <div style={points}>
          </div>
        </div>
      </div>

    )
  }

}

export default Landing;
