import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

const CustomButton = ({
  text,
  route,
  extraStyle,
  onClickHandle,
  centerButton
}) => {

  return (
    <div
      className={!extraStyle ? "buttonContainer" : "buttonContainer extraStyle"}
    >
        <Link to={route}>
          {
            centerButton ? (
              <button className="button" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={onClickHandle} >{text}</button>
            ) : (

              onClickHandle ? (
                <button className="button" onClick={onClickHandle}>{text}</button>
                ) : 
                (
                  <button className="button">{text}</button>
                  )
                  )
          }
        </Link>
    </div>
  );
};

export default CustomButton;
