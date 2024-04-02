import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AppointmentList = ({ appointments, setAppointments }) => {
  console.log(appointments);


  const handleDelete = (ID) => {
    setAppointments(
      appointments?.filter(item => item.id != ID)
    )
  }
  const handleToggle = (ID) => {
    setAppointments(
      appointments?.map(item =>  item.id == ID ? {...item,consulted:!item.consulted} : item )
    )
  }
  return (
    <Container>
      <h3 className="text-center">Appointment List</h3> 
      {
         appointments?.length ? 
        appointments.map((item) => {
          return (<Row key={item.id} className={"appointments justify-content-between align-items-center " + (item.consulted ? "consulted" : "")}>
            <Col>
              <h5>{item.patient}</h5>
              <h5>{item.doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {"item.day.toLocalDateString()"}</h5>
            </Col>
            <Col className=" text-end  ">
              <span className="fs-4 btn" onClick={() => handleToggle(item.id)}>✅</span>
              <span className="fs-4 ms-2 btn" onClick={()=>handleDelete(item.id)}>❌</span>
            </Col>
          </Row>)
        })
        :
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Ho25nvfN_jHAquBRU0JzlAtpm9pwRPhUcg&s" alt="" />
      }
    </Container>
  );
};

export default AppointmentList;
