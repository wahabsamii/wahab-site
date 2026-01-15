import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import axios from 'axios';

function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const fetchAppointment = async () => {
        try {
            const res = await axios.get(`https://wahab-me-backend.vercel.app/api/appointment/all`);
            if (res.data.success) {
                setAppointments(res.data.appointments);
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }

    useEffect(() => {
        fetchAppointment();
    }, []);
  return (
    <DashboardLayout>
    <div>
        <h3 className='text-2xl font-semibold mb-4'>All Appointment</h3>
        <div className='grid grid-cols-3 gap-3'>
            {
                appointments.map((item, index) => (
                    <div className='bg-red-300 p-4 rounded-xl'>
                        <p><strong>Name:</strong> {item.name}</p>
                        <p><strong>Email:</strong> {item.email}</p>
                        <p><strong>Phone No:</strong> {item.phone}</p>
                        <p><strong>Subject: </strong>{item.subject}</p>
                        <p><strong>Date: </strong>{item.Date ? new Date(item.Date).toDateString() : 'N/A'}</p>
                         <p><strong>Message: </strong>{item.message}</p>
                    </div>
                ))
            }
        </div>
    </div>
    </DashboardLayout>
  )
}
export default Appointments