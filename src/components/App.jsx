import React from "react";
import Nav from "./Nav";
import PeopleList from "./PeopleList";
import { Switch, Route } from "react-router-dom";
import NewTicketForm from "./NewTicketForm";
import Error404 from "./Error404";

function App() {
  return(
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={PeopleList} />
        <Route path="/newticket" component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
