// import React, { useEffect } from 'react';
// import { useState } from 'react';
const SkinDisease = (props) => 
{
    // const[user,setUser]=useState([])
    // const userData=[
    // {name:"Blackheads"},
    // {name:"Skin Rash"},
    // {name:"Itching"},
    // {name:"Internal Itching"},
    // {name:"Skin Peeling"},]

    // useEffect(()=>{
    // setUser(userData);
    // },[]);

  return (
    <>
      <label className="checkContainer">Blackheads
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Blackheads")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Skin Rash
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Skin Rash")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Itching
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Itching")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Internal Itching
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Internal Itching")}}/>
        <span className="checkmark"></span>
      </label>
      <label className="checkContainer">Skin Peeling
        <input type="checkbox" onChange={(e) =>{props.handleChangeSkin(e.target.checked,"Skin Peeling")}}/>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default SkinDisease;