import React from 'react'
import './LogOut.css'

import {useHistory} from 'react-router-dom'
const LogOut = () => {

    const history=useHistory()


    const logoutHandler=(e)=>{
        e.preventDefault()
        localStorage.removeItem('login')
        history.replace('./login')
    }
  return (
    <div>
   <div className='box'>
    <div className='titled'>
        <h1>Are You Sure?</h1>
    </div>
    <div>
        <form onSubmit={logoutHandler}>
        <div className='bts'>
            <button>YES</button>
        </div>
        </form>
    </div>
    </div> 
    </div>
  )
}

export default LogOut
