import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>List of Users</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {listOfUsers.map(user => (
          <li
            key={user.id}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '5px',
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{user.name}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

