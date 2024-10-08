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
    <form className='add-user-form' onSubmit={handleSubmit}>
      <div>
        <input className='new-user-input' placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <input className='new-user-input' placeholder='Age' type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </div>
      <div>
        <input className='new-user-input' placeholder='Address' type="text"  value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <button id='add-user' type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
