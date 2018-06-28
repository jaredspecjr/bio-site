import React from "react";
import cat from "../assets/images/kitty.jpeg";

function NewTicketForm(){
  return (
    <div>
      <form>
        <input
          type="text"
          id="names"
          placeholder='Pair Names'/>
        <input
          type="text"
          id="location"
          placeholder="Location"/>
        <textarea
          id="issue"
          placeholder="Describe your issue."/>
        <button type="submit">Help!</button>
      </form>
      <img src={cat}/>
    </div>
  );
}

export default NewTicketForm;
