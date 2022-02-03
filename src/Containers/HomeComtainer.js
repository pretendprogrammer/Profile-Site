import React from "react";
import { Image } from "react-bootstrap";
import ExperienceAndEducation from "../Components/ExperienceAndEducation";
import Skills from "../Components/Skills";

function HomeComtainer(props) {
  return (
    <div>
      <Image
        roundedCircle
        height="25%"
        width="25%"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGBlD0RscbNpQ/profile-displayphoto-shrink_400_400/0/1630598515892?e=1649289600&v=beta&t=U7nZ1cRrnS5sqC-meM-yK56OTrqCuCVcO8lZGP_oF78"
        alt="Here lies a picture of my face"
      />
      <p>
        <h4>
          Hi there! My name is Yosef Adelman, and I am a full stack developer.
          Currently open for work.
        </h4>
      </p>
      <ExperienceAndEducation />
      <Skills />
    </div>
  );
}

export default HomeComtainer;
