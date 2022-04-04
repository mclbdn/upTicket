import React from "react";
import help_icon from "../../assets/help-icon.svg";
import CollapsibleFaq from "./CollapsibleFaq";
import styles from "./Faq.module.scss"

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
    <section className={styles.faq_section} id="faq">
      <img draggable="false" src={help_icon} alt="Question mark icon" />
      <h2>FAQ</h2>
      <div className={styles.faqs_container}>
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
