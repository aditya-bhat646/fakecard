import React from "react";

export const InputForm = ({ userChange }) => {
  return (
    <div className="inputform__body">
      <div className="inputCard">
        <form>
          <input
            placeholder="Card No."
            onChange={userChange}
          ></input>
          <br />
          <input
            placeholder="Username"
            onChange={userChange}
          ></input>{" "}
          <br />
          <input
            placeholder="expiry"
            onChange={userChange}
          ></input>{" "}
          <br />
          <input
            placeholder="PIN"
            onChange={userChange}
          ></input>{" "}
          <br />
        </form>
      </div>
    </div>
  );
};

export default InputForm;
