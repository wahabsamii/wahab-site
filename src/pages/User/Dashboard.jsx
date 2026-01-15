import { useSelector } from "react-redux";
import DashboardLayout from "./DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const {currentUser} = useSelector((state) => state.user);
  const [appointments, setAppointments] = useState([]);
    const email = currentUser.email;
    const fetchAppointment = async () => {
        try {
            const res = await axios.post(`https://wahab-me-backend.vercel.app/api/appointment/user`, {email});
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
      <h1 className="text-3xl font-semibold mb-6">Welcome back {currentUser.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="My Appointments" value={appointments.length} />
        <Card title="My Sessions" value="13" />
      </div>
    </DashboardLayout>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white rounded-2xl shadow p-5">
    <h2 className="text-lg font-medium text-gray-600">{title}</h2>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;
