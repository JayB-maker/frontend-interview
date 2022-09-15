import React, { useState } from "react";
import LeftDiv from "./LeftDiv/leftDiv";
import RightDiv from "./rightDiv/RightDiv";
import "./Homepage.scss";
import { loginContext } from "../context/helper";

const Homepage = () => {
  const [login, setLogin] = useState(false);

  return (
    <loginContext.Provider value={{ login, setLogin }}>
      <div className="container">
        <LeftDiv />
        <RightDiv />
        <div className="bottom-img">
          <img src="asset/Mask-group.png" alt="img" />
        </div>
      </div>
    </loginContext.Provider>
  );
};

export default Homepage;
