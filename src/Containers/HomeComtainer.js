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
        src="https://media-exp1.licdn.com/dms/image/C4D03AQGBlD0RscbNpQ/profile-displayphoto-shrink_800_800/0/1630598515892?e=1643241600&v=beta&t=szdHaQFd556z0BRfUz6C-PkCVfYMOfwP_5XcAITwhtc"
        alt="Here lies a picture of my face"
      />
      <p>
        <h4>
          Hi there! My name is Yosef Adelman, and I am a full stack developer.
          Although I am currently living in Brooklyn (NY), my wife and I want to
          move to Atlanta. If you want me to work for you in or around the
          Atlanta (GA) area, we should talk! :)
        </h4>
      </p>
      <ExperienceAndEducation />
      <Skills />
    </div>
  );
}

export default HomeComtainer;
