// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className= "flex w-full bg-yellow-400 debug-screens">
//         <div className="flex md:justify-between sm:justify-center sm:items-center md:w-10/12 sm:w-12/12 lg:w-11/12">

//         <div className="p-3 md:text-3xl ml-5 mx-4 my-4 sm:text-2xl sm:text-center">
//             <Link to={'/'}>
//                 BayMax
//             </Link>
//         </div>

//         <div className="flex justify-end my-4 flex-wrap  p-3 sm:hidden">

//       {["Home", "Profile", "Predict", "About", "SignIn", "SignUp"].map(
//           (item, index) => {
//               return (
//                   <Link key={index} to={item === 'Home' ? '/' : item}>
//             <span key={index}
//                 className = 'mx-3 p-2 items-center text-black-400 sm:text-2xl md:text-3xl  hover:bg-black hover:text-yellow-400 hover:rounded-lg transition-all'
//                 >
//                 {item}
//             </span>
//             </Link>
//           );
//         }
//         )}
//         </div>
//         </div>

//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className= "flex w-full bg-yellow-400 debug-screens">
//         <div className="flex justify-between">

//         <div className="p-3 ml-5 mx-4 my-4">
//             <Link to={'/'}>
//                 BayMax
//             </Link>
//         </div>

//         <div className="flex justify-end my-4 flex-wrap  p-3">

//       {["Home", "Profile", "Predict", "About", "SignIn", "SignUp"].map(
//           (item, index) => {
//               return (
//                   <Link key={index} to={item === 'Home' ? '/' : item}>
//             <span key={index}
//                 className = 'mx-3 p-2 items-center text-black-400 sm:text-2xl md:text-3xl  hover:bg-black hover:text-yellow-400 hover:rounded-lg transition-all'
//                 >
//                 {item}
//             </span>
//             </Link>
//           );
//         }
//         )}
//         </div>
//         </div>

//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className= "flex w-full bg-yellow-400 debug-screens">
//         <div className="flex justify-between bg-red-300">

//         <div className="p-3 ml-5 mx-4 my-4">
//             <Link to={'/'}>
//                 BayMax
//             </Link>
//         </div>

//         <div className="flex justify-end my-4 flex-wrap  p-3">

//       {["Home", "Profile", "Predict", "About", "SignIn", "SignUp"].map(
//           (item, index) => {
//               return (
//                   <Link key={index} to={item === 'Home' ? '/' : item}>
//             <span key={index}
//                 className = 'mx-3 p-2 items-center text-black-400  hover:bg-black hover:text-yellow-400 hover:rounded-lg transition-all'
//                 >
//                 {item}
//             </span>
//             </Link>
//           );
//         }
//         )}
//         </div>
//         </div>

//     </div>
//   );
// };

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="relative container flex mx-auto bg-yellow-400 debug-screens">
//       {/* <div className="flex w-10/11 justify-between"> */}
//       <div className="flex w-11/12 justify-between bg-red-300">

//       <div className="mx-2 my-2 p-3 text-3xl"
//       >BayMax</div>

//       {/* <div> */}
//       <div className="flex justify-end my-4 flex-wrap p-3 sm:bg-blue-900">
//         {["Home", "Profile", "Predict", "About", "SignIn", "SignUp"].map(
//           (item, index) => {
//             return (
//               <Link key={index} to={item === "Home" ? "/" : item}>
//                 <span
//                   key={index}
//                   className="mx-3 p-2 items-center text-black-400  hover:bg-black hover:text-yellow-400 text-2xl hover:rounded-lg transition-all"
//                   >
//                   {item}
//                 </span>
//               </Link>
//             );
//           }
//           )}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import './Header.scss';
import { getAuth } from "firebase/auth";
import { FaPowerOff, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  const auth = getAuth();
  const [printPredict, setPrintPredict] = React.useState(true);
  
  return (
    <div className="header-outer-container">
      <div className='header-container'>
        <div className="header-title">
          <Link to = { '/'} className='link'>
            BayMax
          </Link>
        </div>
        <div>
          {/* {["Profile", "Predict", "About", "Get Started"].map( */}
          
          {["Predict", "Profile"].map(
            (item, index) => {
              // if(auth?.currentUser){
              //   if(item == "Get Started"){
              //     return <Link key={index} to={"profile"} className='link'>
              //     <div
              //       key={index}
              //       className="header-item"
              //       >
              //       {<FaUser/>}
              //     </div>
              //   </Link>
              //   }
              // }
              if(item == "Predict" && !setPrintPredict) return <div key={index}></div>
              return (
                <Link key={index} to={item} className='link'>
                  <div
                    key={index}
                    // className="mx-3 p-2 items-center text-black-400  hover:bg-black hover:text-yellow-400 text-2xl hover:rounded-lg transition-all"
                    className="header-item"
                    >
                    {item == "Profile" ? <FaUser /> : item}
                  </div>
                </Link>
              );
            }
            )}
        </div>
      </div>
  </div>
  );
};

export default Header;
