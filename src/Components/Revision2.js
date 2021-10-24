import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";

function Revision2(props) {
  return (
    <div>
      <Container>
        <h2>Watch me demonstrate using the 2nd revision of RapidbuS</h2>
        <ReactPlayer url="https://youtu.be/13J79I5a0Ns" controls />
      </Container>
    </div>
  );
}

export default Revision2;
