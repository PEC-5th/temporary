'use client';

import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const API_BASE_URL = 'http://localhost:9090'; // 모의 서버 주소

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  // GET 요청: 모든 사용자 가져오기
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // GET 요청: 특정 사용자 가져오기
  const fetchUser = async (id: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      const data = await response.json();
      console.log('Fetched user:', data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  // POST 요청: 새 사용자 추가
  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error('Failed to add user');
      const createdUser = await response.json();
      setUsers([...users, createdUser]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => fetchUser(user.id)}>Details</button>
          </li>
        ))}
      </ul>

      <h2>Add New User</h2>
      <form onSubmit={addUser}>
        <input
          type='text'
          placeholder='Name'
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type='email'
          placeholder='Email'
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default UserManagement;
