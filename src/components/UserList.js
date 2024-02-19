import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const handleUserChange = (e) => {
    setNewUser(e.target.value);
  };

  const handleAddUser = () => {
    if (newUser.trim() !== '') {
      setUsers([...users, newUser]);
      setNewUser('');
    }
  };

  const handleDeleteUser = (index) => {
    const newUser = ([...users]);
    newUser.splice(index,1);
    setUsers(newUser);
  };

  return (
    <div>
      <h1>User List</h1>
      <input type="text" value={newUser} onChange={handleUserChange} />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
