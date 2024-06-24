// import React, { useState } from 'react';
// import { auth } from './firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// let userid;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null); // State for error message
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user=userCredential.user;
//       userid=user.uid;
//       console.log("User Id:",userid);
//       console.log(user.accessToken)
//       localStorage.setItem('uid',user.uid);
//       localStorage.setItem('token', user.accessToken);
//       localStorage.setItem('user', JSON.stringify(user));
//       navigate("/general");
//     } catch (error) {
//       console.error(error);
//       setError("Incorrect email or password"); // Set error message
//     }
//   }

//   return (
//     <div className="black-box">
//       <h1 style={{ color: 'skyblue' }}>Login Page</h1>
//       {error && (
//         <div className="error-popup">
//           {error}
//           <button onClick={() => setError(null)}>OK</button>
//         </div>
//       )}
//       <form onSubmit={handleSubmit} className='login-form'>
//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Your Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className='login-button'>Login</button>
//       </form>
//       <p>Need to Signup? <Link to="/">Create Account</Link></p>
//     </div>
//   )
// }

// export default Login;
// export {userid};

import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
let userid;
const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      userid=user.uid;
      console.log("User Id:",userid);
      // console.log(user.accessToken)
      localStorage.setItem('uid', user.uid);
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true); // Update authentication status
      navigate("/general");
    } catch (error) {
      console.error(error);
      setError("Incorrect email or password");
    }
  }

  return (
    <div className="black-box">
      <h1 style={{ color: 'skyblue' }}>Login Page</h1>
      {error && (
        <div className="error-popup">
          {error}
          <button onClick={() => setError(null)}>OK</button>
        </div>
      )}
      <form onSubmit={handleSubmit} className='login-form'>
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
        <button type="submit" className='login-button'>Login</button>
      </form>
      <p>Need to Signup? <Link to="/signup">Create Account</Link></p>
    </div>
  )
}

export default Login;
export {userid};