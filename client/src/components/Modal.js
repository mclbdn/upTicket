import React from "react";

const Modal = ({
  children,
  shown,
  close,
  setIsUpdatingTicket,
  setActiveTicketId,
}) => {
  const handleClick = () => {
    setIsUpdatingTicket(false);
    close();
    setActiveTicketId("");
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
