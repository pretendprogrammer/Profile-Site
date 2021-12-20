import React, { useState } from "react";
import { ListGroup, Button, Collapse } from "react-bootstrap";

function RapidbuSOverview(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
      >
        What is RapidbuS?
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <p>
            RapidbuS is a system to bring information to bus drivers safely
            while they are on the road.
          </p>
          <p>
            I started driving a school bus in 2018, and I was given a sheet of
            paper with the following information printed on it, in Excell
            format:
          </p>
          <ListGroup horizontal="sm">
            <ListGroup.Item>First name</ListGroup.Item>
            <ListGroup.Item>Last name</ListGroup.Item>
            <ListGroup.Item>Address number</ListGroup.Item>
            <ListGroup.Item>Street name</ListGroup.Item>
            <ListGroup.Item>
              Special conditions (ex. skip in the morning)
            </ListGroup.Item>
            <ListGroup.Item>Parent cell number</ListGroup.Item>
            <ListGroup.Item>Parent email address</ListGroup.Item>
          </ListGroup>
          <b>~40 TIMES!</b>
          <p>
            I thought that was pretty sad for 2018, so I built the first
            Revision of RapidbuS for myself to use on the road instead of an 8"
            by 11" sheet of paper.
          </p>
        </div>
      </Collapse>
    </>
  );
}

export default RapidbuSOverview;
