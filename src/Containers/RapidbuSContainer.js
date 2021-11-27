import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import RapidbuSOverview from "../Components/RapidbuSOverview";
import Revision1 from "../Components/Revision1";
import Revision2 from "../Components/Revision2";
import Revision3 from "../Components/Revision3";

function RapidbuSContainer(props) {
  const [key, setKey] = useState("revision-3");
  return (
    <>
      <RapidbuSOverview />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="revision-1" title="Version 1">
          <Revision1 />
        </Tab>
        <Tab eventKey="revision-2" title="Version 2">
          <Revision2 />
        </Tab>
        <Tab eventKey="revision-3" title="Version 3">
          <Revision3 />
        </Tab>
      </Tabs>
    </>
  );
}

export default RapidbuSContainer;
