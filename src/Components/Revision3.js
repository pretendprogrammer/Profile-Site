import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Revision3(props) {
  return (
    <div>
      <strong>~~~In development~~~</strong>
      <br />
      <strong>
        The third revision of RapidbuS uses React, React-Native, and Ruby on
        Rails with PostgreSQL
      </strong>
      <h3>React</h3>
      <p>
        A React-powered web interface to the database. Users can create
        accounts, districts, routes, passengers, and addresses for each.
        Passengers can be connected with stops, and stops can be conntected to
        routes. Routes can be copied from existing routes, and reordered if
        there are small diferences between morning and afternoon runs. The same
        route can be shared to multiple users or drivers.
      </p>
      <h3>React-Native</h3>
      <p>
        React-Native powers the mobile app. Usernames and passwords are securely
        saved on the user's device. An unlimited amount of routes can be chosen
        from. Locations will be shown to the driver one at a time, with all the
        associated passengers listed below. Each passenger can have conditions
        programmed from the React interface to allow stops to be skipped at
        specific times related to time of day, day of week, or calender date.
        Records of the time each stop was marked as done get saved to the
        database.
      </p>
      <h3>Ruby on Rails</h3>
      <p>
        Multiple dimentions of associations and relationships between data
        models are established. Users are JWT authenticated and all requests
        check for a bearer token. Certain post requests trigger other model
        instanced to be created automatically.
      </p>
      <Container>
        <h2>Watch me demonstrate using the 3rd revision of RapidbuS</h2>
        <ReactPlayer url="https://youtu.be/oh4HZoyXtHI" controls />
      </Container>
    </div>
  );
}

export default Revision3;
