import React, { useEffect } from "react";
import { useState } from 'react';
import { toast } from "react-toastify";
import CustomButton from "../CustomButton/CustomButton";
import Info from "../info";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase.config.js";
import { getAuth } from 'firebase/auth';


const Predict = () => {
  const auth = getAuth();

  const [symptoms, setSymptoms] = useState(null);
  const [predictions, setPredictions] = useState(null);

  // Automatic Smooth Scroll whenever we hit submit button
  useEffect(() => {
    if(symptoms){
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, [symptoms])

  const handleSave = async(e) => {
    e.preventDefault();

    const report = {
      symptoms: String(symptoms).replaceAll(",", ", "),
      predictions: String(predictions).replaceAll(",", ", "),
      timestamp: serverTimestamp(),
      userRef: auth.currentUser.uid,
  }

  try{
    await addDoc(collection(db, "reports"), report);
    toast.success('Prediciton Saved Successfully');
  }catch(error){
      toast.error('Report not added');
  }
  }

  return (
    <div>
      <Info setSymptoms={setSymptoms} setPredictions={setPredictions}/>
      {predictions && (
        <>
          <h1 style={{textAlign: 'center', fontSize: '2.5rem'}}>{
            predictions.map((item, index) => {
              if(index === predictions.length - 1) return item;
              return String(item) + ', ';
            })
          }</h1>
          <CustomButton centerButton text={'Want to Save Predictions?'} route={'/profile'} onClickHandle={handleSave}/>
        </>
      )}
    </div>
  );
};

export default Predict;