import React, { useState } from "react";
import help_icon from "../assets/help-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CollapsibleFaq from "./CollapsibleFaq";

const Faq = () => {
  const faqs = [
    {
      faqQuestion: "Who is behind upTicket?",
      faqAnswer:
        "Behind upTicket, there is an aspiring web deveoper Michal Bednar.",
    },
    {
      faqQuestion: "What is upTicket?",
      faqAnswer:
        "upTicket is its creators try to create a simple ticketing system.",
    },
    {
      faqQuestion: "Why was upTicket founded?",
      faqAnswer:
        "upTicket was created in order to learn more about web technologies and is 100% a personal project for personal use.",
    },
  ];

  return (
    <section className="faq-section">
      <img draggable="false" src={help_icon} alt="" />
      <h2>FAQ</h2>
      <div className="faqs-container">
        {faqs.map((faq) => {
          return (
            <CollapsibleFaq
              faqQuestion={faq.faqQuestion}
              faqAnswer={faq.faqAnswer}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
