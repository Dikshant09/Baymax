import React, { useState, useEffect} from "react";
import Spinner from "../Spinner/Spinner";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase.config.js";

import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  startAfter,
  limit,
} from "firebase/firestore";

import ReportItem from "../ReportItem/ReportItem";
import "./Profile.scss";
import CustomButton from "../CustomButton/CustomButton";

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
  const [lastFetchedReport, setLastFetchedReport] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userRef = collection(db, "reports");

        const q = query(
          userRef,
          where("userRef", "==", auth.currentUser.uid),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedReport(lastVisible);

        let reports = [];

        querySnap.forEach((doc) => {
          return reports.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setReports(reports);
        setLoading(false);
      } catch (e) {
        toast.error("Couldn't fetch reports...");
      }
    };

    fetchUser();
  }, [auth, auth.currentUser.uid]);

  const onFetchMoreReports = async () => {
    try {
      // Get a reference to the reports...
      const userRef = collection(db, "reports");

      // Get a query...
      const q = query(
        userRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedReport),
        limit(10)
      );

      // Execute the query...
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedReport(lastVisible);

      const reports = [];

      querySnap.forEach((doc) => {
        return reports.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setReports((prevState) => [...prevState, ...reports]);
      setLoading(false);
    } catch (error) {
      toast.error("Couldn't fetch reports...");
    }
  };

  const handleLogOut = (e) => {
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
          
          {lastFetchedReport && (
            <div onClick={onFetchMoreReports}>
              <CustomButton className="loadMore" text="Load More" route={"/profile"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
