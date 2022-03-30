import React from "react";

const Modal = ({ children, shown, close, setIsUpdatingTicket }) => {
  const handleClick = () => {
    setIsUpdatingTicket(false);
    close();
  };
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        handleClick();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
