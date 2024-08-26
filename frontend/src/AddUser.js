// src/components/AddUser.js

import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      name,
      age: parseInt(age, 10),
      address,
      userLogins: [] // Add default or empty userLogins, as per your backend structure
    };

    try {
      const response = await axios.post('http://localhost:5000/', newUser);
      console.log('User added:', response.data);
      
      // Callback to inform parent component
      onUserAdded(response.data);
      
      // Reset form
      setName('');
      setAge('');
      setAddress('');
    } catch (error) {
      console.error('There was an error adding the user!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
