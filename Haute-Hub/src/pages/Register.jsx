import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faBuilding } from "@fortawesome/free-solid-svg-icons";
import RegisterImg from "../assets/register.jpg";
import "../styles/Register.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [cpswd, setCpswd] = useState("");
  const [cname, setCname] = useState("");
  const [noCredentials, setNoCredentials] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [samePassword, setSamePassword] = useState(true);

  const navigate = useNavigate();

  const registerAcc = async () => {
    await createUserWithEmailAndPassword(auth, email, pswd)
      .then((userDetails) => {
        const user = userDetails.user;
        console.log(user);
        navigate("/dashboard");
      })
      .catch((err) => {
        const errCode = err.code;
        const errMsg = err.message;
        console.log(errCode, errMsg);
      });
  };

  const validateForm = () => {
    setNoCredentials(false);
    setNoEmail(false);
    setNoPassword(false);
    setSamePassword(true);
    var emailFormat = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (email == "" || pswd == "" || cpswd == "" || cname == "") {
      setNoCredentials(true);
      return;
    } else if (!emailFormat.test(email)) {
      setNoEmail(true);
      return;
    } else if (pswd.length < 8) {
      setNoPassword(true);
      return;
    } else if (pswd != cpswd) {
      setSamePassword(false);
      return;
    }
    registerAcc();
  };

  return (
    <div className="register">
      <div className="registerField">
        <img src={RegisterImg} alt="register" />
      </div>
      <div className="registerForm">
        <div>
          {noCredentials ? (
            <p className="err">Please enter all fields</p>
          ) : (
            <></>
          )}
          {noEmail ? (
            <p className="err">Please enter valid Email Address</p>
          ) : (
            <></>
          )}
          {noPassword ? (
            <p className="err">Password should atleast be 8 characters long</p>
          ) : (
            <></>
          )}
          {!samePassword ? (
            <p className="err">Password and Confirm Password should match</p>
          ) : (
            <></>
          )}
          <div className={`formGroup ${email.length > 0 ? "active" : ""}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            />
            <label>
              <FontAwesomeIcon icon={faUser} /> Email
            </label>
          </div>
          <div className={`formGroup ${pswd.length > 0 ? "active" : ""}`}>
            <input
              type="password"
              value={pswd}
              onChange={(e) => {
                setPswd(e.target.value);
              }}
              name="pswd"
            />
            <label>
              <FontAwesomeIcon icon={faLock} /> Password
            </label>
          </div>
          <div className={`formGroup ${cpswd.length > 0 ? "active" : ""}`}>
            <input
              type="password"
              value={cpswd}
              onChange={(e) => {
                setCpswd(e.target.value);
              }}
              name="cpswd"
            />
            <label>
              <FontAwesomeIcon icon={faLock} /> Confirm Password
            </label>
          </div>
          <div className={`formGroup ${cname.length > 0 ? "active" : ""}`}>
            <input
              type="text"
              value={cname}
              onChange={(e) => {
                setCname(e.target.value);
              }}
              name="cname"
            />
            <label>
              <FontAwesomeIcon icon={faBuilding} /> Company Name
            </label>
          </div>
          <button onClick={validateForm}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
