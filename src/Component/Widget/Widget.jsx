import React from "react";
import './widget.css'

const Widget = ({cardNo, username, expiry}) => {
  return (
    <div className="widget__body">
      <div className="widget__body-display">
        <div className="cardno">
          <p>{cardNo}</p>
        </div>
        <div className="username">
          <p>{username}</p>
        </div>
        <div className="expiry">
          <p>{expiry}</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
