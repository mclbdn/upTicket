import React from "react";

const Modal = ({
  children,
  shown,
  handleCloseBtn,
}) => {
  const handleClick = () => {
    handleCloseBtn();
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
