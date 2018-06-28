import React from "react";
import People from "./People";
import Random from "../assets/images/Random.jpeg";


var masterPeopleList = [
  {
    names: "Thato and Haley",
    location: "3A",
    issue: "Firebase won't save record. Halp.",
    image: Random
  },
  {
    names: "Sleater and Kinney",
    location: "4B",
    issue: "Fox image not displaying on page, can only see duck?",
    image: Random
  },
  {
    names: "Imani & Jacob",
    location: "9F",
    issue: "Donkey picture not displaying on hover in Zoology app. :(",
    image: Random
  }
];

function PeopleList(){
  return (
    <div>
      <hr/>
      {masterPeopleList.map((person, index) =>
        <People names={person.names}
          location={person.location}
          issue={person.issue}
          image={person.image}
          key={index} />
      )}
    </div>
  );
}

export default PeopleList;
