// src/components/UserList.js

import React from 'react';

const UserList = ({ users }) => {
  console.log(users);
  return (
    <div className='userList'>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} ({user.age}) - {Array.isArray(user.address) ? user.address.join(', ') : user.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
