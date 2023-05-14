import React from "react";
import "./HomeItem.scss";

const HomeItem = ({ item, index }) => {
  const { title, excerpt, image, large } = item;

  return (
    <div className="homeItem-outer-container">
      <div className="homeItem-container">
        <div
          className={`homeItem-parent-container ${
            index % 2 === 0 ? "flex-reverse" : ""
          } `}
        >
          <img
            src={image}
            className={`home-item-image ${large ? "image-large" : ""}`}
            alt=""
          />
          <div
            className={`home-item-text ${
              index % 2 === 0 ? "flex-reverse" : ""
            }`}
          >
            <div className="head-text-2">{title}</div>
            <div
              className="card card-hover m-2 p-text-2"
              style={{
                maxWidth: "20rem",
                backgroundColor: "#1abc9c",
                borderRadius: "10px",
              }}
            >
              <p className="card-text">{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
