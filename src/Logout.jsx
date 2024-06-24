import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('uid');
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* <><Message /></> */}
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout