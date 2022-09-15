import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { loginContext } from "../../context/helper";

const leftDivDetails = [
  {
    icon: "asset/vector.png",
    details: "Join waitlist",
  },
  {
    icon: "asset/vector.png",
    details: "Signup",
  },
  {
    icon: "asset/vector.png",
    details: "Reset password",
  },
  {
    icon: "asset/vector.png",
    details: "Need Help",
  },
];

const leftDivDetail = [
  {
    icon: "asset/vector.png",
    details: "Reset password",
  },
  {
    icon: "asset/vector.png",
    details: "Need Help",
  },
];

const LeftDiv = () => {
  const { login } = useContext(loginContext);
  return (
    <div className="left-div">
      <img className="logo" src="asset/g10.png" alt="logo" />
      <p className="help">Need Help?</p>

      <div className="inner-container">
        {login
          ? leftDivDetails.map((item, index) => (
              <div className="sub-container" key={index}>
                <img src={item.icon} alt="icon" />
                <h4>{item.details}</h4>
              </div>
            ))
          : leftDivDetail.map((item, index) => (
              <div className="sub-container" key={index}>
                <img src={item.icon} alt="icon" />
                <h4>{item.details}</h4>
              </div>
            ))}
      </div>
    </div>
  );
};

export default LeftDiv;
