

import React, { useState } from 'react'
import Header from '../header/Header';
import Doctors from '../Doctors';
import { appointmentData } from '../../helper/data';
import AppointmentList from '../Appointment';

const Home = () => {
  const [appointments,setAppointments] = useState(JSON.parse(localStorage.getItem("appointments")) || []);  
  return (
    <div>
        
      <Header />
      <Doctors appointments={appointments} setAppointments={setAppointments} />
      <AppointmentList appointments={appointments} setAppointments={setAppointments}/>
    </div>
  )
}

export default Home;