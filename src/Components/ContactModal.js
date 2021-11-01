import React from "react";
import { Modal } from "react-bootstrap";

function ContactModal(props) {
  return (
    <Modal show={props.show} onHide={props.toggleModal}>
      <Modal.Body>{props.body}</Modal.Body>
    </Modal>
  );
}

export default ContactModal;
