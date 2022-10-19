import React from "react";
import { Image } from "react-bootstrap";
import Skills from "../Components/Skills";
import YosefAdelmanFace from "../Resources/yosef_adelman_face.jpg";

function HomeComtainer(props) {
  return (
    <>
      <Image
        roundedCircle
        height="25%"
        width="25%"
        src={YosefAdelmanFace}
        alt="Here lies a picture of my face"
      />
      <h4>
        Hi there! My name is Yosef Adelman, and I am a full stack developer.
        Currently open for work.
      </h4>
      <Skills />
    </>
  );
}

export default HomeComtainer;
