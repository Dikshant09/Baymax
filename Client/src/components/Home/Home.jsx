// import React from "react";

// const Home = () => {
//   return (
//     <h1 className="text-3xl">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="rounded-lg md:w-56"
//             src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
//             width="448"
//             height="299"
//             alt="Woman paying for a purchase"
//           />
//         </div>
//         <div className="mt-4 md:mt-0 md:ml-6">
//           <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
//             Marketing
//           </div>
//           <a
//             href="#"
//             className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
//           >
//             Finding customers for your new business
//           </a>
//           <p className="mt-2 text-gray-600">
//             Getting a new business off the ground is a lot of hard work. Here
//             are five ideas you can use to find your first customers.
//           </p>
//         </div>
//       </div>
//     </h1>
//   );
// };

// export default Home;

import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
// import image from '././assets/one-click-Checkup.jpg';
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import CustomButton from "../CustomButton/CustomButton";
import Footer from "../Footer/Footer";

import HomeItem from "../HomeItem/HomeItem";
import Spinner from "../Spinner/Spinner";

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
