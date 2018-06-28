import React from "react";
import People from "./People";
import Random from "../assets/images/Random.jpeg";


var masterPeopleList = [
  {
    names: "Tom",
    location: "San Francisco, California",
    issue: "I like expensive coffee.",
    image: Random
  },
  {
    names: "Dick",
    location: "San Antonio, Texas",
    issue: "I like guns.",
    image: Random
  },
  {
    names: "Harry",
    location: "Boise, Idaho",
    issue: "I like taters.",
    image: Random
  }
];

function PeopleList(){
  return (
    <div>
      {masterPeopleList.map((person, index) =>
        <People
          image={person.image}
          names={person.names}
          location={person.location}
          issue={person.issue}
          key={index} />
      )}
    </div>
  );
}

export default PeopleList;
