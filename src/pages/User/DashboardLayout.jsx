import { useState } from "react";
import { FaHome, FaUsers, FaCog, FaBars, FaAngleRight, FaThList } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../../redux/user/userSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    dispatch(signoutSuccess());
    navigate('/');
};

  const menuItems = [
    { label: "Dashboard", icon: <FaHome />, path: "/user/dashboard" },
    { label: "My Appointments", icon: <FaThList />, path: "/user/appointments" }
  ];

 return (
   <div
   className={`h-screen bg-black p-3 text-white transition-all duration-300 ${
     isOpen ? "w-64" : "w-20"
     }`}
 >
 <div className="flex items-center justify-between p-2 border-b border-gray-700">
    <span className="text-lg font-bold">{isOpen ? "User Panel" : ""}</span>
  <FaBars
      className="cursor-pointer text-xl"
     onClick={toggleSidebar}
   />
  </div>


 <ul className="mt-4">
     {menuItems.map((item) => (
    <NavLink key={item.path} to={item.path}>
        <li className={`flex flex-row p-2 gap-2 mb-4 m-2 rounded-xl items-center hover:bg-gray-700 ${
             location.pathname === item.path ? "bg-[#FF014F] border-[#FF014F] border-[1px]" : "border-[#FF014F] border-[1px]"
             }`}>
                 <span className="text-xl">{item.icon}</span>
                  {isOpen && <span>{item.label}</span>}
                  </li>
                  </NavLink>
                ))}
                <NavLink onClick={() => handleLogout()}>
                  <li className={`flex flex-row p-2 gap-2 mb-4 m-2 rounded-xl items-center hover:bg-[#FF014F] border-[#FF014F] border-[1px]`}>
                 <span className="text-xl"><FaArrowRightFromBracket /></span>
                  <span>Sign Out</span>
                  </li>
                  </NavLink>
             </ul>
             
        </div>
);
};


const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
