import { useState, useEffect } from 'react';

const useAuth = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  useEffect(() => {
    console.log('Saving users to localStorage', users);
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const registerUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    console.log('Users after registration:', updatedUsers);
  };

  const loginUser = (email, password) => {
    return users.find(user => user.email === email && user.password === password);
  };

  return { users, registerUser, loginUser };
};

export default useAuth;
