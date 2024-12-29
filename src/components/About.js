import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About page for Foodie</h1>
        <UserClass name={"Aaryak"} location={"Kolkata"} />
      </div>
    );
  }
}

export default About;
