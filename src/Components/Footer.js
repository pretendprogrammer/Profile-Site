import React, { useState } from "react";
import { Button, ModalBody, NavLink } from "react-bootstrap";
import { Envelope, Github, Linkedin, Telephone } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
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
      <Link to="https://github.com/pretendprogrammer">
        <Github />
      </Link>
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
      <Link to="https://www.linkedin.com/in/yosef-adelman/">
        <Linkedin />
      </Link>
    </div>
  );
}

export default Footer;
