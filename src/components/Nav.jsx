import React from "react";
import { Link } from "react-router-dom";
import Office from "../assets/images/office2.png";

function Nav() {
  var myStyledNav = {
  };

  var links = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px"
  };

  var link = {
    textAlign: "center",
    textDecoration: "none",
    fontSize: "20px",
    marginLeft: "30px",
    color: "black",
    fontFamily: "sans-serif",
  };

  var imageStyle = {
    flexShrink: "0",
    width: "100%",
  };

  var imgContainer = {
    maxHeight: "800px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  var heroText = {
    zIndex: '4',
    position: 'absolute',
    top: '25%'
  };

  return (
    <div style={myStyledNav}>
      <div style={imgContainer}>
        <img style={imageStyle} src={Office}></img>
        <h1 style={heroText}>Hero Banner</h1>
      </div>
      <div style={links}>
        <style jsx>{`
            .red {
              color: black;
            }
            .red:hover {
              color: red;
            }
            `}</style>
        <div>
          <Link style={link} to="/"><span className="red">Home</span></Link>
        </div>
        <div>
          <Link style={link} to="/newticket">Create Ticket</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
