import React from "react";
import { Accordion } from "react-bootstrap";

const skills = [
  {
    id: 1,
    title: "JavaScript",
    iconSource: "",
    description: `Introduced to me on day 1 at Flatiron School, a total of 135 hours over 3 weeks were dedicated to learning this language. JavaScript was used throughout my remaining 12 weeks at Flatiron, and I'm still using, learning, and growing with it.`,
  },
  {
    id: 2,
    title: "React.js",
    iconSource: "",
    description: `Although I had some prior knowlege of React from CodeWithMosh.com, Flatiron taught me React starting at week 4 of my bootcamp experience.`,
  },
  {
    id: 4,
    title: "React-Semantics-UI",
    iconSource: "",
    description: "My first choice for styling for its simplicity.",
  },
  {
    id: 3,
    title: "React-Bootstrap",
    iconSource: "",
    description:
      "After graduating from Flatiron School, I was encouraged to try React-Bootstrap as an alternative to Semantics-UI. I converted my entire frontend of RapidBus to it, and is now my go-to for styling.",
  },
  {
    id: 9,
    title: "React-Native",
    iconSource: "",
    description: "Self-taught, starting in 2018.",
  },
  {
    id: 5,
    title: "Ruby",
    iconSource: "",
    description: "Learned at Flatiron School, starting week 7.",
  },
  {
    id: 6,
    title: "Rails",
    iconSource: "",
    description: "Learned in Flatiron School, starting week 7",
  },
  {
    id: 7,
    title: "Python",
    iconSource: "",
    description: "Self-taught, starting in 2018.",
  },
  {
    id: 8,
    title: "Kotlin",
    iconSource: "",
    description: "Self-taught, starting in 2018",
  },
];

function Skills(props) {
  return (
    <div>
      <h1>Skills</h1>
      <Accordion>
        {skills.map((skillObj) => (
          <Accordion.Item eventKey={skillObj.id}>
            <Accordion.Header>{skillObj.title}</Accordion.Header>
            <Accordion.Body>{skillObj.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Skills;
