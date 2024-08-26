// src/App.js

import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import AddUser from './AddUser';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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


  const handleSearchResults = async (searchQuery) => {
    try {
      const response = await axios.post('http://localhost:3000/search', {
        query: searchQuery,
      });

      setSearchResults(response.data);
      // onResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <div className="container">
    <div className="main-layout">
      <div className="user-container">
        {/* User List */}
        <div className="userList">
         <UserList users={users} />
        </div>

        {/* Add User Form */}
        <div className="add-user-form">
          <AddUser onUserAdded={handleUserAdded} />
        </div>
      </div>
      
      {/* Search bar */}
      <SearchBar onResults={handleSearchResults} />
    </div>
  </div>
);
};

export default App;
