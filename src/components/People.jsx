import React from "react";
import PropTypes from "prop-types";

function People(props){
  return (
    <div className="background">
      <img src={props.image}></img>
      <h3>{props.names}</h3>
      <h3>{props.location}</h3>
      <p><em>{props.issue}</em></p>
      <style jsx>{`
          .background {
            background-color: lightyellow;
            color: #655e57;
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
