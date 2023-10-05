import React, { useEffect, useState } from "react";
import "./Profile.css";
const Profile = () => {
  const [details, setDetails] = useState({ fullName: "", photoUrl: "" });
  const [updatedDetails,setUpdatedDetails]=useState({ fullName: "", photoUrl: "" })
  const [updated,setUpdated]=useState(false)

  useEffect(()=>{
    async function retrieveData() {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE",
          {
            method: "POST",
            body: JSON.stringify({
              idToken: localStorage.getItem("login"),
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        const data = await response
          .json((res) => {})
          .then((res) => {
            console.log(updatedDetails)
            setUpdatedDetails(
                {...updatedDetails,['photoUrl']:res.users[0].photoUrl}
            )
            setUpdated(true)
          });
      }
    
      retrieveData();

   
    
  },[])



 
  async function dataHandler(e) {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAjGnWVeAziSlwIlc4VUJwIEJBZoibh8LE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("login"),
          displayName: details.fullName,
          photoUrl: details.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response
      .json((res) => {
        console.log(res);
      })
      .then((res) => {
        localStorage.setItem("profile", res.localId);
        console.log(res.localId);
      });
    setDetails({ fullName: "", photoUrl: "" });
  }

  const nameHandler = (e) => {
    setDetails({ details, ["fullName"]: e.target.value });
  };

  const urlHandler = (e) => {
    setDetails({ details, ["photoUrl"]: e.target.value });
  };

  return (
    <div className="box">
      <div className="titled">
        <h1>Contact Details</h1>
      </div>
      <form onSubmit={dataHandler}>
        <div className="field1">
          <label>Full Name</label>
          <input
            value={details.fullName}
            type="text"
            required
            onChange={nameHandler}
          ></input>
        </div>
        <div className="field1">
          <label>Photo Url</label>
          {updated ? <input value={updatedDetails.photoUrl}></input>: <input
            value={details.photoUrl}
            required
            onChange={urlHandler}
          ></input>}
        </div>
        {!updated &&  <div className="but">
          <button>Update</button>
        </div>}
      </form>
    </div>
  );
};

export default Profile;
