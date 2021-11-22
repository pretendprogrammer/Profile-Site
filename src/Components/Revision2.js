import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Revision2(props) {
  return (
    <div>
      <strong>
        The second revision of RapidbuS was built with Firebase's Realtime
        Database, Python with Tkinter for the user interface, and Android Studio
        in Kotlin.
      </strong>
      <h3>Firebase</h3>
      <p>
        I developed a system of nested object-structures to support multiple
        districts (schools), with multiple routes in each, with log data.
        <br />
        Accounts were created for each user who needed access to a particular
        district or route. Authenticated user id's were hardcoded into the Rules
        of the database
      </p>
      <h3>Python</h3>
      <p>
        Using the Tkinter package as a user interface, users can log in with
        their credentials, and edit their routes. Unlimited amount of locations
        could be added. Up to 100 stops could be added, each connecting one or
        more names to a single location. Stops could be programmed to skip
        automatically before or after midday (12PM), or highlight on the mobile
        app. Log data could also be accessed. Logs could be downloaded as in a
        CSV format and easily rendered cleanly by programs like Google Sheets
        and Exell. Logs can be deleted from the database individually, or all at
        the same time.
      </p>
      <h3>Android Studio</h3>
      <p>
        Username and password were saved to the end device, and automatically
        re-logged in on app start. Up to 3 different routes could be accessed.
        On route start, names per location would be displayed one at a time. If
        more than one name was connected to a single location, the location
        address would be displayed on top, and all the names would be listed
        below. Stops could be marked as missed, skipped, or completed by use of
        3 buttons on screen. App would go to home screen when route was
        finished.
      </p>
      <Container>
        <h2>Watch me demonstrate using the 2nd revision of RapidbuS</h2>
        <ReactPlayer url="https://youtu.be/13J79I5a0Ns" controls />
      </Container>
    </div>
  );
}

export default Revision2;
