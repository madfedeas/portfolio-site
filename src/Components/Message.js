import React from "react";

const Message = ({ type }) => {
  const messages = {
    success: "Item has been added to cart.",
    danger: "Item has been deleted from cart."
  };
  return (
    <div className={`alert alert-${type}`}>
      {messages[type]}
    </div>
  );
};

export default Message;
