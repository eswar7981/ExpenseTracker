import React, { useState } from 'react'
import './Profile.css'
const Profile = () => {
    const [details,setDetails]=useState({fullName:'',photoUrl:''})

  const dataHandler=(e)=>{
    e.preventDefault()
    

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE',{
            method:'POST',
            body:JSON.stringify({
                ID_TOKEN:localStorage.getItem('login'),
                display_Name:details.fullName,
                photoUrl:details.photoUrl,
                returnSecureToken:true
            }),
            headers: {
                "Content-Type": "application/json",
              }
        }).then((res)=>{
            if(res.ok){

            }else{
                return res.json().then((data) => {
                   console.log(data)
                  })
            }
        }).then((data)=>{
            console.log(data)
        })


        setDetails({fullName:'',photoUrl:''})
    

  }


  const nameHandler=(e)=>{
    setDetails({details,['fullName']:e.target.value})
  }


  const urlHandler=(e)=>{
    setDetails({details,['photoUrl']:e.target.value})
  }

  return (
   
    <div className='box'>
        <div className='titled'>
            <h1>Contact Details</h1>
        </div>
      <form  onSubmit={dataHandler}>
        <div  className='field1'>
            <label>Full Name</label>
            <input value={details.fullName} type='text' required onChange={nameHandler}></input>
        </div>
        <div className='field1'> 
        <label>Photo Url</label>
        <input value={details.photoUrl} required onChange={urlHandler}></input>
        </div>
        <div className='but'>
            <button>
                Update
            </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
