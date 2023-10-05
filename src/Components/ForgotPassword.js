import React, { useState } from "react";
import "./ForgotPassword.css";
import {useHistory} from 'react-router-dom'
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const history=useHistory()


  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
        } else {
          res.json().then((data) => console.log(data));
        }
      })
      .then((data) => {
        console.log(data);
      });

      setEmail('')
      history.replace('/login')
  };

  return (
    <div>
      <div className="box">
        <div className="titled3">
          <h1>Reset Password</h1>
        </div>
        <div className="form">
          <form onSubmit={submitHandler}>
            <div className="field1">
              <label>Email ID</label>
              <input
                required
                type="email"
                value={email}
                onChange={emailHandler}
              ></input>
            </div>
            <div className="but">
              <button>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
