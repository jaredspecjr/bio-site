import React from "react";
import { Link } from "react-router-dom";
import Office from "../assets/images/office2.png";

function Nav() {
  var myStyledNav = {
  };

  var theStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  var links = {
    display: "flex",
  };

  var link = {
    paddingLeft: "20px",
    paddingTop: "50px",
    paddingBottom: "5px",
    paddingRight: "20px",
  };
  var search = {
    paddingRight: "15px",
    display: "inline-block",

  };
  var inside = {
    fontSize: "20px",
    borderRadius: "20px",
    border: "3px solid lightblue",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "5px",
    paddingTop: "5px"
  };
  var imageStyle = {
    width: "100%",
  };

  var imgContainer = {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={myStyledNav}>
      <div style={imgContainer}>
        <img style={imageStyle} src={Office}></img>
      </div>
      <div style={theStyle}>
        <div style={links}>
          <div style={inside}>
            <Link to="/"><span style={link}>Home</span></Link>
          </div>
          <div style={inside}>
            <Link to="/newticket"><span style={link}> Create Ticket</span></Link>
          </div>
        </div>
        <div>
          <div style={search}>
            <input style={inside} placeholder="Search" />

          </div>
          <div style={search}>
            <button style={inside}>Tweet</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
