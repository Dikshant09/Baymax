import React from "react";
import "./ReportItem.scss";

const ReportItem = ({ report, id, empty }) => {
  if (empty) {
    return (
      <div
        className="line"
        style={{ margin: "1rem", padding: "0.5px", height: "0px" }}
      ></div>
    );
  }

  const { symptoms, predictions } = report;
  const date = new Date(report.timestamp.toDate()).toUTCString();

  return (
    <>
      <div className="line"></div>
      <div className="profile">
        <div className="profile-area profile-heading">
          <div className="profile-area-inner">
            <div className="profile-area-item bold-bro">Symptoms: </div>
            <div className="profile-area-item-2">{symptoms}</div>
          </div>

          <div className="profile-area-inner">
            <div className="profile-area-item bold-bro">Predictions: </div>
            <div className="profile-area-item-2">{predictions}</div>
          </div>
          <div className="profile-area-inner">
            <div className="profile-area-item bold-bro">TimeStamp: </div>
            <div className="profile-area-item-2">{date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportItem;
