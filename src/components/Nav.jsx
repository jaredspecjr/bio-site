import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  var myStyledNav = {
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

  return (
    <div style={myStyledNav}>
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
  );
}

export default Nav;
