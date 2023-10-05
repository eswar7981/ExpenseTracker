import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navi.css'

const Navi = () => {
  return (
    <div>
      <header>
        <nav>
            <ul>
                <div className='head'>
                    <li className='head1'>
                        <NavLink to="/login">
                            < div className='btn' style={{textDecoration:'none'}}>
                            Login
                            </div>
                        </NavLink>
                    </li>
                  
                    <li className='head1'>
                        <NavLink to="/profile">
                            < div className='btn'>
                            Profile
                            </div>
                        </NavLink>
                    </li>
                    {localStorage.getItem('login')
                    &&
                    <li className='head1'>
                        <NavLink to="/verifyemail">
                            < div className='btn'>
                            Verify Email
                            </div>
                        </NavLink>
                    </li>
}
                </div>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navi
