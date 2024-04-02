import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ show, setShow, handleClose, doctorName, addAppointment }) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [patientName, setPatinentName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      id: new Date().getTime(),
      patient: patientName,
      day: new Date(date),
      consulted: false,
      doctor: doctorName,
    });
    setPatinentName("");
    setDate("");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">
            Appointment for {doctorName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setPatinentName(e.target.value)}
                value={patientName}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date&time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default AddModal;
