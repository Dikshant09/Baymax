import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config.js";

import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
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
              <div className="profile-area-item-2">{name}</div>
            </div>

            <div className="profile-area-inner">
              <div className="profile-area-item bold-bro">Email:</div>
              <div className="profile-area-item-2">{email}</div>
            </div>
          </div>
          <div className="logout" onClick={handleLogOut}>
            Log Out
          </div>
        </div>
        <div className="heading-text bold-bro" style={{ textAlign: "center" }}>
          Previous Reports
        </div>

        <div className="reports">
          {reports?.length > 0 ? (
            reports.map((report, index) => (
              <ReportItem report={report.data} key={index} />
            ))
          ) : (
            <>
              <ReportItem empty="empty" />
              <h3 style={{ textAlign: "center", padding: "2rem" }}>
                No data found
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
