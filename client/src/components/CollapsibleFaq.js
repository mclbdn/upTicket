import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

const CollapsibleFaq = ({faqQuestion, faqAnswer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`single-faq ${isOpen ? "opened" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3>{faqQuestion}</h3>
      {isOpen ? (
        <FontAwesomeIcon icon={faMinus} className="plus-minus-icon" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="plus-minus-icon" />
      )}
      <p className="faq-text">{faqAnswer}</p>
    </div>
  );
};

export default CollapsibleFaq;
