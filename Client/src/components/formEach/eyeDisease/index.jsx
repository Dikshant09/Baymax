// import React, { useEffect } from 'react';
// import { useState } from 'react';
const EyeDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Redness Of Eyes"},
    // {name:"Watering From Eyes"},
    // {name:"Yellowing Of Eyes"},
    // {name:"Blurred And Distorted Vision"}]
    // useEffect(()=>{
    // setUser(userData);
  // },[]);

  return (
    <>
      <label className="checkContainer">Redness Of Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Redness Of Eyes")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Watering From Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Watering From Eyes")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Yellowing Of Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Yellowing Of Eyes")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Blurred And Distorted Vision
        <input type="checkbox" onChange={(e) =>{props.handleChangeEyes(e.target.checked,"Blurred And Distorted Vision")}}/>
        <span className="checkmark"></span>
      </label>
      
    </>
  );
}

export default EyeDisease;