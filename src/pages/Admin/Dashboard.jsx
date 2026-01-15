import DashboardLayout from "./DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold mb-6">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Projects" value="5000" />
        <Card title="Active Clients" value="5" />
        <Card title="Support Tickets" value="12" />
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
