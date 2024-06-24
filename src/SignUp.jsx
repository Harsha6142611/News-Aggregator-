import React, { useState } from 'react'
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user=userCredential.user;
      const userid=user.uid;
      console.log("User Id:",userid);
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/general");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="black-box">
      <h1 style={{ color: 'skyblue' }}>Signup Page</h1>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='signup-button'>Signup</button>
      </form>
      <p>Need to Login? <Link to="/login">Login</Link></p>
      
    </div>
  )
}

export default SignUp;