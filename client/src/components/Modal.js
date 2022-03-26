import React from "react";

const Modal = ({ children, shown, close }) => {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button onClick={() => close()}>Close</button>
      </div>
    </div>
  ) : null;
};

export default Modal;
