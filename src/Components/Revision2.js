import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Revision2(props) {
  return (
    <div>
      <strong>
        The second revision of RapidbuS was built with Firebase's Realtime
        Database, Python with Tkinter for the data management interface, and
        Android Studio in Kotlin for the mobile drivers app.
      </strong>
      <h3>Firebase</h3>
      <p>
        I developed a system of nested object-structures to support multiple
        districts (schools), with multiple routes in each, with log data.
        <br />
        Accounts were created for each user who needed access to a particular
        district or route. Authenticated user id's were hardcoded into the Rules
        of the database.
      </p>
      <h3>Python</h3>
      <p>
        Using the Tkinter package for visual components, users could log in with
        their credentials, and edit their routes. Unlimited amount of locations
        could be added. Up to 100 stops could be added per route, each
        connecting one or more names to a single location. Stops could be
        programmed to skip automatically before or after midday (12PM), or
        highlight on the mobile app. Logs could also be downloaded and opened by
        programs like Google Sheets and Exell. Logs can be deleted from the
        database individually, or all at the same time from the data managment
        application.
      </p>
      <h3>Android Studio</h3>
      <p>
        The app could 'remember' up to 3 routes at a time, though users could
        modify the configuration as needed to user additional routes. When a
        route was selected, the app would show the user each location with its
        passengers on at a time. If more than one name was connected to a single
        location, the location address would be displayed on top, and all the
        names would be listed below. Stops could be marked as missed, skipped,
        or completed by use of 3 buttons on screen. App would go to home screen
        when the route was finished.
      </p>
      <Container>
        <h2>Watch me demonstrate using the 2nd revision of RapidbuS</h2>
        <ReactPlayer url="https://youtu.be/13J79I5a0Ns" controls />
      </Container>
    </div>
  );
}

export default Revision2;
