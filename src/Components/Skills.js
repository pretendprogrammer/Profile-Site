import React from "react";
import { Image, ListGroup, Stack } from "react-bootstrap";
import ReactLinkify from "react-linkify";

const skills = [
  {
    id: 1,
    title: "JavaScript",
    iconSource:
      "https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png",
  },
  {
    id: 2,
    title: "React.js",
    iconSource: "https://miro.medium.com/max/256/0*9TDJnsZDg-S8Pa_F.png",
  },
  {
    id: 4,
    title: "React-Semantic-UI",
    iconSource: "https://react.semantic-ui.com/logo.png",
  },
  {
    id: 3,
    title: "React-Bootstrap",
    iconSource:
      "https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg",
  },
  {
    id: 9,
    title: "React-Native",
    iconSource:
      "https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png",
  },
  {
    id: 5,
    title: "Ruby",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png",
  },
  {
    id: 6,
    title: "Rails",
    iconSource:
      "https://www.pngfind.com/pngs/m/344-3441072_ruby-on-rails-logo-graphic-design-hd-png.png",
  },
  {
    id: 7,
    title: "Python",
    iconSource:
      "https://mpng.subpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef921c53528.7857216715434365778078.jpg",
  },
  {
    id: 8,
    title: "Kotlin",
    iconSource:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    id: 9,
    title: "C#",
    iconSource:
      "https://learn.microsoft.com/de-de/windows/images/csharp-logo.png",
  },
  {
    id: 10,
    title: "Entity Core",
    iconSource:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6qrV_veEayLR-iym799ZfXXk4D4D4R425w&usqp=CAU",
  },
];

function Skills(props) {
  return (
    <ListGroup className="m-auto w-50">
      {skills.map((skillObj) => (
        <ListGroup.Item eventKey={skillObj.id} key={skillObj.id}>
          <Stack direction="horizontal">
            <Image
              className="language-icon me-auto"
              src={skillObj.iconSource}
            />
            <p className="m-auto">{skillObj.title}</p>
          </Stack>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Skills;
