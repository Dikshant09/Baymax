import { getAuth } from "firebase/auth";
import React from "react";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import CustomButton from "../CustomButton/CustomButton";

import HomeItem from "../HomeItem/HomeItem";

import "./Home.scss";

const Home = () => {
  const auth = getAuth();
  const homeItems = [
    {
      text: "One Click Checkup",
      image: one,
    },
    {
      text: "Get Instant Report",
      image: two,
    },
    {
      text: "Quick, Refined & Acurate",
      image: three,
      large: true,
    },
  ];

  return (
    <div className="home-outer-container">
      {homeItems.map((item, index) => {
        return (
          <div key={index}>
            <HomeItem item={item} index={index} />
          </div>
        );
      })}
      <CustomButton
        text={"Get Started"}
        route={auth?.currentUser ? "predict" : "/signup"}
      />
    </div>
  );
};

export default Home;
