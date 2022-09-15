import React from "react";
import { useContext } from "react";
import { loginContext } from "../../context/helper";

const RightDiv = () => {
  const { login, setLogin } = useContext(loginContext);

  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  return (
    <div className="right-div">
      <div className="inner-container">
        <h1>Give your customers the gift of hassle-free logistics</h1>
        <p>Join the waitlist for early access to Dropper for Business.</p>
        <form>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
          />
          <button onClick={handleClick}>Join Waitlist</button>
        </form>
      </div>
    </div>
  );
};

export default RightDiv;
