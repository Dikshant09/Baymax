// import React from "react";
// import { Link } from "react-router-dom";

// const ReportItem = ({ report, id }) => {
//   return (
//     <li className="categoryListing">
//       <Link
//         to={`/category/${report.type}/${id}`}
//         className="categoryListingLink"
//       >
//         <div className="categoryListingDetails">
//           <p className="categoryListingLocation"></p>
//           <p className="categoryListingName">{report.symptoms}</p>
//           <p className="categoryListingPrice">
//           {report.predictions}
//             {/* {report.offer
//               ? report.discountedPrice
//                   .toString()
//                   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//               : report.regularPrice
//                   .toString()
//                   .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
//             {report.type === "rent" && " / Month"} */}
//           </p>
// {/*
//           <div className="categoryListingInfoDiv">
//             <img src={''} alt="bed" />
//             <p className="categoryListingInfoText">
//               {report.bedrooms > 1
//                 ? `${report.bedrooms} Bedrooms`
//                 : "1 Bedroom"}
//             </p>

//             <img src={''} alt="bath" />
//             <p className="categoryListingInfoText">
//               {report.bedrooms > 1
//                 ? `${report.bedrooms} Bathrooms`
//                 : "1 Bathroom"}
//             </p>
//           </div> */}
//         </div>
//       </Link>
//     </li>
//   );
// };

// export default ReportItem;

import React from "react";
import { Link } from "react-router-dom";
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
            <div className="profile-area-item">{symptoms}</div>
          </div>

          <div className="profile-area-inner">
            <div className="profile-area-item bold-bro">Predictions: </div>
            <div className="profile-area-item">{predictions}</div>
          </div>
          <div className="profile-area-inner">
            <div className="profile-area-item bold-bro">TimeStamp: </div>
            <div className="profile-area-item">{date}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportItem;
