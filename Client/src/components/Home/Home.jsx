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
      title: "One Click Checkup",
      excerpt: "Create a profile now for a quick checkup",
      image: one,
    },
    {
      title: "Quick, Refined & Accurate",
      excerpt:
        "Machine Learning models are used to predict the disease, based on symptoms",
      image: two,
    },
    {
      title: "Get Instant Report",
      excerpt: "Go to profile section to check all reports",
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
