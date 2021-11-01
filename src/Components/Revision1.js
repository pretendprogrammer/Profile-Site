import React from "react";
import { Figure, ListGroup } from "react-bootstrap";

function Revision1(props) {
  return (
    <div>
      <h2>
        <a href="http://appinventor.mit.edu/">MIT App Inventor II</a>
      </h2>
      <p>
        First version of RapidbuS was data in a Google Sheet document, fetched
        and processed by a mobile app developed in MIT's App Inventor interface.
      </p>
      <h3>Features:</h3>
      <ListGroup>
        <ListGroup.Item>Show passenger data one stop at a time</ListGroup.Item>
        <ListGroup.Item>
          Mark stops as 'Completed', 'Skipped', or 'Missed'
        </ListGroup.Item>
        <ListGroup.Item>
          Save stop logs with timestamps to files on device
        </ListGroup.Item>
        <ListGroup.Item>
          Process TRUE/FALSE values from Google Sheet data to skip individual
          passengers in the morning or afternoon
        </ListGroup.Item>
        <ListGroup.Item>
          'Flag' individual passenger's names with highlighting to bring extra
          attetion from the driver
        </ListGroup.Item>
      </ListGroup>
      <Figure>
        <Figure.Image src="https://i.ibb.co/Czjt1R0/MIT-App-Inventor-II-Example.png" />
        <Figure.Caption>Example of puzzle-like code structure</Figure.Caption>
      </Figure>
    </div>
  );
}

export default Revision1;
