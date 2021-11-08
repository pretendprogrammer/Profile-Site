import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Envelope, Github, Linkedin, Telephone } from "react-bootstrap-icons";
import ContactModal from "./ContactModal";

function Footer(props) {
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState("");

  const toggleModal = () => setShowModal(!showModal);
  return (
    <div>
      <ContactModal
        show={showModal}
        toggleModal={toggleModal}
        body={modalBody}
      />
      <a href="https://github.com/pretendprogrammer">
        <Github />
      </a>
      <Button
        variant="light"
        onClick={() => {
          setModalBody("413-777-4412");
          toggleModal();
        }}
      >
        <Telephone />
      </Button>
      <Button
        variant="light"
        onClick={() => {
          setModalBody("Shmuli5770@gmail.com");
          toggleModal();
        }}
      >
        <Envelope />
      </Button>
      <a href="https://www.linkedin.com/in/yosef-adelman/">
        <Linkedin />
      </a>
    </div>
  );
}

export default Footer;
