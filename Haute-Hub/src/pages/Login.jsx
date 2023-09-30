import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import LoginImg from "../assets/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState();
  const [isCorrect, setIsCorrect] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [noUser, setNoUser] = useState(false);

  const navigate = useNavigate();


  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        if (userCredentials) {
          navigate("/dashboard");
        } else {
          alert("Enter correct credentials");
        }
      },
      (err) => {
        console.log(err.code);
        switch (err.code) {
          case "auth/wrong-password":
            setWrongPassword(true);
            console.log("WRong");
            break;
          case "auth/user-not-found":
            setNoUser(true);
            break;
        }
      }
    );
  };

  const validateForm = () => {
    setIsCorrect(true);
    setValidEmail(true);
    setWrongPassword(false);
    setNoUser(false);
    var emailFormat = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email == "" || password == "") {
      setIsCorrect(false);
      return;
    } else if (!emailFormat.test(email)) {
      alert("Enter valid email addresss");
      setValidEmail(false);
      return;
    }
    signIn();
  };

  return (
    <div className="login">
      <img src={LoginImg} alt="Login" />
      <div className="loginInputs">
        <>
          {isCorrect ? <></> : <p className="err">Enter email and password</p>}
          {validEmail ? (
            <></>
          ) : (
            <p className="err">Enter valid email address</p>
          )}
          {noUser ? (
            <p className="err">No user found with that email address</p>
          ) : (
            <></>
          )}
          {wrongPassword ? (
            <p className="err">Password entered is incorrect</p>
          ) : (
            <></>
          )}
          <div className={`loginForm ${email.length > 0 ? "active" : ""}`}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <label>
              <FontAwesomeIcon icon={faUser} className="userIcon" /> Email
            </label>
          </div>
          <div className={`loginForm ${password.length > 0 ? "active" : ""}`}>
            <input
              type="password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
            <label>
              <FontAwesomeIcon icon={faLock} /> Password
            </label>
          </div>
          <div className="checkboxDiv">
            <input
              checked={isSelected}
              type="checkbox"
              className="checkbox"
              onChange={() => setIsSelected(!isSelected)}
            />
            <span onClick={() => setIsSelected(!isSelected)}>Remember Me</span>
            <Link to="/forgotpassword" className="forgotPassword">
              Forgot Password?
            </Link>
          </div>
          <Link to="/register" className="register">
            Don't have an account? Register now!
          </Link>
          <button onClick={validateForm}>Login</button>
        </>
      </div>
    </div>
  );
};

export default Login;
