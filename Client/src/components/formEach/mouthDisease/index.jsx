// import React, { useEffect } from 'react';
// import { useState } from 'react';
const MouthDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Cough"},
    // {name:"Ulcers On Tongue"},
    // {name:"Patches In Throat"},
    // {name:"Slurred Speech"},
    // {name:"Breathlessness"},]
    
    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label className="checkContainer">Cough
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Cough")}}/>
          <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Ulcers On Tongue
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Ulcers On Tongue")}}/>
          <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Patches In Throat
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Patches In Throat")}}/>
          <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Slurred Speech
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Slurred Speech")}}/>
          <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Breathlessness
          <input type="checkbox" onChange={(e) =>{props.handleChangeMouth(e.target.checked,"Breathlessness")}}/>
          <span className="checkmark"></span>
      </label>
    </>
  );
}

export default MouthDisease;