// import React, { useEffect } from 'react';
// import { useState } from 'react';
const PainDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Painful Walking"},
    // {name:"Belly Pain"},
    // {name:"Muscle Pain"},
    // {name:"Hip Joint Pain"},
    // {name:"Knee Pain"},
    // {name:"Neck Pain"},
    // {name:"Pain In Anal Region"},
    // {name:"Pain During Bowel Movements"},
    // {name:"Chest Pain"},
    // {name:"Abdominal Pain"},
    // {name:"Back Pain"},
    // {name:"Pain Behind The Eyes"},
    // {name:"Stomach Pain"},
    // {name:"Joint Pain"},]

    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label className="checkContainer">Painful Walking
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Painful Walking")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Belly Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Belly Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Muscle Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Muscle Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Hip Joint Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Hip Joint Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Knee Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Knee Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Neck Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Neck Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Pain In Anal Region
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain In Anal Region")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Pain During Bowel Movements
        <input type="checkbox"  onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain During Bowel Movements")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Chest Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Chest Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Abdominal Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Abdominal Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Back Pain
        <input type="checkbox"  onChange={(e) =>{props.handleChangePain(e.target.checked,"Back Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Pain Behind The Eyes
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Pain Behind The Eyes")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Stomach Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Stomach Pain")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Joint Pain
        <input type="checkbox" onChange={(e) =>{props.handleChangePain(e.target.checked,"Joint Pain")}}/>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default PainDisease;