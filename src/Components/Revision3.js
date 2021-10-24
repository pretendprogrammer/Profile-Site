import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Revision3(props) {
  return (
    <div>
      <Container>
        <h2>Watch me demonstrate using the 3rd revision of RapidbuS</h2>
        <ReactPlayer url="https://youtu.be/oh4HZoyXtHI" controls />
      </Container>
    </div>
  );
}

export default Revision3;
