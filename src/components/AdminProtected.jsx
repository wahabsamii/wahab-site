import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
const { currentUser } = useSelector((state) => state.user);
const role = currentUser?.role;

// If user is not logged in or not admin
if (!currentUser || role !== 'admin') return <Navigate to="/" />;
return children;
};

export default AdminProtected;
