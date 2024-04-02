import React, { useState } from "react";
import { doctorData } from "../helper/data.jsx";
import { Col, Container, Image, Row } from "react-bootstrap";
import AddModal from "./AddModal.jsx";

const Doctors = ({ appointments, setAppointments}) => {
//   console.log(doctorData);

  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState("");

  const handleClose = () => setShow(false);
  const addAppointment = (newAppo) => {
    setAppointments([...appointments, newAppo]);
  };
  return (
    <Container className="my-5">
      <Row>
        {doctorData.map(
          ({ id, img, name, dep }) => {
            return (
              <Col key={id} xs={6} sm={4} lg={3}>
                <Image
                  src={img}
                  alt={name}
                  className="img-thumbnail doctor-img w-100 h-100 object-fit-cover"
                  onClick={() => {
                    setShow(true);
                    setDoctorName(name);
                  }}
                />
                <h5>{name}</h5>
                <h6>{dep}</h6>
              </Col>
            );
          }
        )}
        <AddModal
          show={show}
          setShow={setShow}
          handleClose={handleClose}
          doctorName={doctorName}
          addAppointment={addAppointment}
        />
      </Row>
    </Container>
  );
};

export default Doctors;
