import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./RegisterandLogin.css";
import { Link, useNavigate } from "react-router-dom";
function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const user = data.user;
          console.log("User Id:", user.uid);
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("user", JSON.stringify(user));
          console.log(data, "authData");
          history("/general");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const user = data.user;
          console.log("User Id:", user.uid);
          localStorage.setItem("uid", user.uid);
          localStorage.setItem("token", user.accessToken);
          localStorage.setItem("user", JSON.stringify(user));
          console.log(data, "authData");
          history("/general");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="flex">
      <div className="fimg"></div>
      <ul className="items ">
        <li>REAL TIME DATA</li>
        <li>RELIABLE SOURCES</li>
        <li>CATEGORIZE NEWS</li>
        <li>FAST PACED</li>
        <li>BOOKMARK ARTICLES</li>
        <li>PRECISE WEATHER DETAILS</li>
        <li>INTERACTIVE USER INTERFACE</li>
        <li>SHARE ARTICLES WITH OTHERS</li>
      </ul>
      <div className="square">
        <div className="inner-div flex-col">
          <h1 className="heading">WELCOME TO NEWS AGGREGATOR</h1>
          <div className="profile"></div>
        </div>

        <div className="container2">
          <div className="rectangle">
            <div className="inner-div">
              <div className="App">
                {/* Registration and login Screen */}
                <div className="row ">
                  <div
                    className={login === false ? "activeColor" : "pointer"}
                    onClick={() => setLogin(false)}
                  >
                    Sign Up
                  </div>
                  <div
                    className={login === true ? "activeColor" : "pointer"}
                    onClick={() => setLogin(true)}
                  >
                    Sign In
                  </div>
                </div>{" "}
                <br></br>
                <h1 className="text-3xl">
                  <strong>{login ? "SIGN IN" : "SIGN UP"}</strong>
                </h1>
                <form
                  onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                  <br />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                  <br />

                  {login && <p onClick={handleReset}>Forgot Password?</p>}
                  <br />
                  <button>{login ? "SignIn" : "SignUp"}</button>
                  {/* <p><Link to="/health">use without login</Link></p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAndLogin;
