import React, { useState } from 'react'

const VerifyEmail = () => {


   const [emailId,setEmailId]=useState('')

  async function submitHandler(e){
    e.preventDefault()
    const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE',
    {
        method:'POST',
        body:JSON.stringify({
            requestType:"VERIFY_EMAIL",
            idToken:localStorage.getItem('login')
        }),
        headers: {
            "Content-Type": "application/json",
          }
    }
    )
    
    const data=await response.json((res) => {})
    .then((res) => {
      console.log(res)
   
    });


   


  }


  const emailHandler=(e)=>{
    setEmailId(e.target.value)
}
  return (
    <>
    <div className='box'>
        <div className='titled'>
            <h1>Verify Email</h1>
        </div>
        <form onSubmit={submitHandler}>
        <div className='form'>
            <div className='field1'>
                <label>Email ID</label>
                <input required value={emailId} type='email' onChange={emailHandler}></input>
            </div>
        </div>
        <div className='but'>
            <button>Submit</button>
        </div>
        </form>
    </div>
    </>
  )
}

export default VerifyEmail
