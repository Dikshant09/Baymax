// import React, { useState, useEffect, useContext } from 'react'
// import Spinner from '../Spinner/Spinner';
// import { getAuth } from "firebase/auth";
// import { FaPowerOff, FaSearch, FaUser } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import { db } from "../../firebase.config.js";

// import {
//   collection,
//   query,
//   where,
//   orderBy,
//   getDocs,
//   doc,
//   deleteDoc,
//   updateDoc,
// } from "firebase/firestore";
// import ReportItem from '../ReportItem/ReportItem';

// const Profile = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [reports, setReports] = useState(null);

//   const [formData, setFormData] = useState({
//     name: auth.currentUser.displayName,
//     email: auth.currentUser.email,
//   });

//   const { name, email } = formData;

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const userRef = collection(db, "reports");

//       const q = query(
//         userRef,
//         where("userRef", "==",auth.currentUser.uid),
//         orderBy("timestamp", "desc")
//       );

//       const querySnap = await getDocs(q);

//       let reports = [];

//       querySnap.forEach((doc) => {
//         return reports.push({
//           id: doc.id,
//           data: doc.data(),
//         });
//       });

//       setReports(reports);
//       setLoading(false);
//     };

//     const handleLogOut = (e) => {
//       e.preventDefault();

//       auth.signOut();

//       navigate("/");
//     };

//     const onSubmit = async (e) => {
//       try {
//         // Updating the name if it's really changed...
//         if (auth.currentUser.displayName !== name) {
//           // await updateProfile(auth.currentUser, {
//           //   displayName: name,
//           // });

//           // Update in firestore : passing database, collection name, userID
//           // const userRef = doc(db, "users", auth.currentUser.uid);
//           // await updateDoc(userRef, {
//           //   name: name,
//           // });
//           // toast.success("Profile updated successfully");
//         }
//       } catch (error) {
//         console.log(error);
//         toast.error("Couldn't update profile");
//       }
//     };

//     fetchUser();
//   }, [auth, auth.currentUser.uid]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleLogOut = (e) => {
//     e.preventDefault();

//     auth.signOut();

//     navigate("/");
//     toast.success("Logged Out Successfully");
//   };

//   if(loading) return <Spinner />;

//   return (
//     <div className="profile">
//       <header className="profileHeader">
//         <p className="pageHeader">My Profile</p>
//         <button type="button" className="logOut" onClick={handleLogOut}>
//           Log Out
//         </button>
//       </header>
//       <main>
//         <div className="profileDetailsHeader">
//           <p className="profileDetailsText">Personal Details</p>
//         </div>

//         <div className="profileCard">
//           <input
//             type="email"
//             name="name"
//             className='profileName'
//             value={name}
//             onChange={handleChange}
//             disabled
//           />
//           <input
//             type="text"
//             name="email"
//             className="profileEmail"
//             disabled
//             value={email}
//             onChange= { handleChange }
//           />
//         </div>
//         <Link to="/predict" className="createListing">
//           <p>Check Up Now</p>
//         </Link>

//         {!loading && reports?.length > 0 && (
//           <>
//             <div className="listingText">Your Previous Reports</div>
//             <ul className="listingsList">
//               {reports.map((report) => (
//                 <ReportItem
//                   key={report.id}
//                   id={report.id}
//                   report={report.data}
//                 />
//               ))}
//             </ul>
//           </>
//         )}
//       </main>
//     </div>
//   )
// }

// export default Profile;

import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import { getAuth } from "firebase/auth";
import { FaDove, FaPowerOff, FaSearch, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase.config.js";

import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import ReportItem from "../ReportItem/ReportItem";

import "./Profile.scss";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [reports, setReports] = useState(null);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const userRef = collection(db, "reports");

      const q = query(
        userRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );

      const querySnap = await getDocs(q);

      let reports = [];

      querySnap.forEach((doc) => {
        return reports.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setReports(reports);
      setLoading(false);
    };

    fetchUser();
  }, [auth, auth.currentUser.uid]);

  const handleLogOut = (e) => {
    e.preventDefault();

    auth.signOut();

    navigate("/");
    toast.success("Logged Out Successfully");
  };

  if (loading) return <Spinner />;

  return (
    <div className="profile-outer-container">
      <div className="profile-container">
        <div className="profile">
          <div className="profile-area profile-heading">
            <div className="profile-area-inner">
              <div className="profile-area-item bold-bro">Name:</div>
              <div className="profile-area-item">{name}</div>
            </div>

            <div className="profile-area-inner">
              <div className="profile-area-item bold-bro">Email:</div>
              <div className="profile-area-item">{email}</div>
            </div>
          </div>
          <div className="logout" onClick={handleLogOut}>Log Out</div>
        </div>
          <div className="heading-text bold-bro" style={{textAlign: 'center'}}>Previous Reports</div>

        <div className="reports">

          {
            reports?.length > 0 ? (
              
              reports.map((report, index) => (
                <ReportItem report={report.data} key={index}/>
                ))
                )
                : (
                  <>
                     <ReportItem empty='empty'/>
                     <h3 style={{textAlign: 'center', padding: '2rem'}}>No data found</h3>
                  </>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default Profile;
