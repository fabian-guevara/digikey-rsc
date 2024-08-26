// src/App.js

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import axios from 'axios';


const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <AddUser onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </div>
  );
};

export default App;
