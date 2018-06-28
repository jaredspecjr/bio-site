import React from "react";
import PropTypes from "prop-types";

function People(props){
  return (
    <div className="background">
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <img src={props.image}></img>
      <hr/>
      <style jsx>{`
          .background {
            background-color:green;
            color:#a3c1ad;
          }
        `}</style>
    </div>
  );
}

People.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  image: PropTypes.string
};

export default People;
