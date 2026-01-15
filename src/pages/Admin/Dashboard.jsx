import { useSelector } from "react-redux";
import { FaProjectDiagram, FaUsers, FaLifeRing } from "react-icons/fa";
import DashboardLayout from "./DashboardLayout";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold mb-6">
        Welcome Back {currentUser?.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Total Projects"
          value="501"
          icon={<FaProjectDiagram />}
        />
        <Card
          title="Active Clients"
          value="5"
          icon={<FaUsers />}
        />
        <Card
          title="Support Tickets"
          value="12"
          icon={<FaLifeRing />}
        />
      </div>
    </DashboardLayout>
  );
};

const Card = ({ title, value, icon }) => (
  <div className="bg-white rounded-2xl shadow p-6">
    {/* Icon at top */}
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white text-xl mb-4">
      {icon}
    </div>

    <h2 className="text-sm font-medium text-gray-500">{title}</h2>
    <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

export default Dashboard;
