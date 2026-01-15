import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from './DashboardLayout';

function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axios.get('https://wahab-me-backend.vercel.app/api/auth/');
      setUsers(res.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul className="list-disc pl-6">
          {users.map((user, index) => (
            <li key={index}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}

export default Users;
