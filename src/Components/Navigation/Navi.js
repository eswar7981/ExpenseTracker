import React from "react";
import { NavLink } from "react-router-dom";
import "./Navi.css";
import {useDispatch, useSelector} from 'react-redux'
import { themeActions } from "../../Redux/ThemeReducer";
import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
const Navi = () => {
  const dispatch=useDispatch()
  const auth=useSelector(state=>state.auth.login)
  const checkTotal=useSelector(state=>state.expens.totalExpenses)
  const theme=useSelector(state=>state.theme.theme)

  const lightThemeHandler=(e)=>
  {
    e.preventDefault()
    dispatch(themeActions.isLight())
  }

  const darkThemeHandler=(e)=>{
    e.preventDefault()
    dispatch(themeActions.isDark())
  }
 
  return (
    <div className={theme==='dark'?'dark':'light'}>
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
              {checkTotal>10000 && theme==='dark' &&  
              <div>
                <button onClick={lightThemeHandler}>☀️Light</button>
                </div>
              }
               {checkTotal>10000 && theme==='light' &&  
              <div>
                <button style={{backgroundColor:'black',color:'white'}} onClick={darkThemeHandler}>🌙Dark</button>
                </div>
              }
              
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navi;
