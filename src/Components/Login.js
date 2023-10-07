import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import {authActions} from '../Redux/AuthStore'
const Login = () => {
   const dispatch=useDispatch()
  const history = useHistory();

  const [details, setDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState(false);

  const dataHandler = (e) => {
    e.preventDefault();

    if (!login) {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE",
        {
          method: "POST",
          body: JSON.stringify({
            email: details.email,
            password: details.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let err = "login failed";
              alert(err);
            });
          }
        })
        .then((data) => {
          dispatch(authActions.setUserId(data.idToken))
          dispatch(authActions.isLogin())
          alert("login Successful");
          history.replace("/addexpense");
        })
        .catch((err) => {
          alert("Authentication failed");
        });
      setDetails({ email: "", password: "", confirmPassword: "" });
    } else {
      if (details.password === details.confirmPassword) {
        if (login) {
          fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE",
            {
              method: "POST",
              body: JSON.stringify({
                email: details.email,
                password: details.password,
                returnSecureToken: true,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then((res) => {
            if (res.ok) {
              alert("signup successful");
            } else {
              res.json().then((data) => console.log(data));
            }
          });
          setDetails({ email: "", password: "", confirmPassword: "" });
          setLogin(true);
        }
      } else {
        alert("password is not same in both fields");
      }
    }
  };

  const emailHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["email"]: e.target.value });
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["password"]: e.target.value });
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    setDetails({ ...details, ["confirmPassword"]: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    e.preventDefault();
    history.replace("/forgotpassword");
  };

  return (
    <div className="box">
      <div className="titled">{login ? <h1>Signup</h1> : <h1>Login</h1>}</div>
      <form onSubmit={dataHandler}>
        <div className="forgot">
          <button onClick={passwordChangeHandler}>Forgot Password</button>
        </div>
        <div className="form">
          <div className="field1">
            <label>Email</label>
            <input
              type="email"
              value={details.email}
              onChange={emailHandler}
              required
            ></input>
          </div>
          {!login ? (
            <div className="field2">
              <label>Password</label>
              <input
                type="password"
                value={details.password}
                onChange={passwordHandler}
                required
              ></input>
            </div>
          ) : (
            <div className="field2">
              <label>Password</label>
              <input
                value={details.password}
                onChange={passwordHandler}
                required
              ></input>
            </div>
          )}
          {login && (
            <div className="field3">
              <label>Confirm Password</label>
              <input
                type="password"
                value={details.confirmPassword}
                onChange={confirmHandler}
                required
              ></input>
            </div>
          )}
        </div>
        <div className="but">
          <button>Submit</button>
        </div>
      </form>

      <div className="changemode">
        {login && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setLogin(false);
            }}
          >
            already have an account then. Login
          </button>
        )}
        {!login && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setLogin(true);
            }}
          >
            Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
