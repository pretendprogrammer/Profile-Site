import React from "react";
import { Accordion, Image } from "react-bootstrap";
import ReactLinkify from "react-linkify";

const skills = [
  {
    id: 1,
    title: "JavaScript",
    iconSource:
      "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
    description: `Introduced to me on day 1 at Flatiron School, a total of 135 hours over 3 weeks were dedicated to learning this language. JavaScript was used throughout my remaining 12 weeks at Flatiron, and I'm still using, learning, and growing with it.`,
  },
  {
    id: 2,
    title: "React.js",
    iconSource: "https://miro.medium.com/max/256/0*9TDJnsZDg-S8Pa_F.png",
    description: `Although I had some prior knowlege of React from CodeWithMosh.com, Flatiron taught me React starting at week 4 of my bootcamp experience.`,
  },
  {
    id: 4,
    title: "React-Semantic-UI",
    iconSource: "https://react.semantic-ui.com/logo.png",
    description: "My first choice for styling for its simplicity.",
  },
  {
    id: 3,
    title: "React-Bootstrap",
    iconSource:
      "https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg",
    description:
      "After graduating from Flatiron School, I was encouraged to try React-Bootstrap as an alternative to Semantics-UI. I converted my entire frontend of RapidbuS to it, and is now my go-to for styling.",
  },
  {
    id: 9,
    title: "React-Native",
    iconSource:
      "https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png",
    description:
      "Self-taught, starting in 2018. My third and current revision of the RapidbuS mobile app is in this language.",
  },
  {
    id: 5,
    title: "Ruby",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
    description:
      "Learned at Flatiron School, starting week 7. I love to explore and test out how much work I can allocate to the backend in this language.",
  },
  {
    id: 6,
    title: "Rails",
    iconSource:
      "https://www.pngfind.com/pngs/m/344-3441072_ruby-on-rails-logo-graphic-design-hd-png.png",
    description:
      "Learned in Flatiron School, starting week 7. I spent a lot of time wrapping my head around multi-dimentional relationships and how to keep track of them.",
  },
  {
    id: 7,
    title: "Python",
    iconSource:
      "https://mpng.subpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef921c53528.7857216715434365778078.jpg",
    description:
      "Self-taught, starting in 2018. I built my second revision of the RapidbuS desktop/backend interface in this language, using Tkinter for a GUI.",
  },
  {
    id: 8,
    title: "Kotlin",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    description:
      "Self-taught, starting in 2018. I built my second revision of the RapidbuS mobile app in Android Studio with this language.",
  },
];

function Skills(props) {
  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noreferrer">
      {text}
    </a>
  );

  return (
    <div>
      <h1>Skills</h1>
      <Accordion>
        {skills.map((skillObj) => (
          <Accordion.Item eventKey={skillObj.id} key={skillObj.id}>
            <Accordion.Header>
              <Image className="language-icon" src={skillObj.iconSource} />
              <h6> {skillObj.title}</h6>
            </Accordion.Header>
            <Accordion.Body>
              <ReactLinkify componentDecorator={componentDecorator}>
                <p>{skillObj.description}</p>
              </ReactLinkify>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Skills;
