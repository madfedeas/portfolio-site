import React from "react";

const Message = ({ type }) => {
  const messages = {
    saved: "Entry saved, feel better!",
    updated: "Entry updated, keep it accurate!",
    deleted: "Entry deleted, hope that wasn't important..."
  };
  return (
    <div className={`App-message ${type}`}>
      <p className="container">
        <strong>{messages[type]}</strong>
      </p>
    </div>
  );
};

export default Message;
