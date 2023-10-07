import React from "react";
import { NavLink } from "react-router-dom";
import "./Navi.css";
import {useSelector} from 'react-redux'
const Navi = () => {
  const auth=useSelector(state=>state.auth.login)

  
 
  return (
    <div>
      <header>
        <nav>
          <ul>
            <div className="head">
              
              {auth && (
                <>
                  <li className="head1">
                    <NavLink to="/addexpense">
                      <div className="btn">Add Expense</div>
                    </NavLink>
                  </li>
                  <li className="head1">
                    <NavLink to="/verifyemail">
                      <div className="btn">Verify Email</div>
                    </NavLink>
                  </li>
                  <li className="head1">
                    <NavLink to="/logout">
                      <div className="btn">LogOut</div>
                    </NavLink>
                  </li>
                </>
              )}
              <li className="head1">
                <NavLink to="/profile">
                  <div className="btn">Profile</div>
                </NavLink>
              </li>
              
             {!auth && <li className="head1">
                <NavLink to="/login">
                  <div className="btn" style={{ textDecoration: "none" }}>
                    Login
                  </div>
                </NavLink>
              </li>}
              
              
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navi;
