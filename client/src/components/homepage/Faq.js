import React, { useState } from "react";
import styles from "./Faq.module.scss";
import SingleQa from "./SingleQa";

const Faq = () => {
  const [selectedPara, setSelectedPara] = useState(1);

  const faqOptionsList = [
    { text: "Company", id: 1 },
    { text: "Features", id: 2 },
    { text: "Community", id: 3 },
  ];

  const faqCompanyQAsList = [
    { q: "Q: Who is behind upTicket?", a: "Behind this project, there is a team of 3 hard-working professionals." },
    {
      q: "Q: What exactly is upTicket?",
      a: "upTicket is a tool focused on small and fast-growing teams, enabling them to work with IT/SWE tickets in a much faster and simpler way.",
    },
    {
      q: "Q: Why was upTicket founded?",
      a: "Originally, upTicket was founded to enable its founder to learn more about web technologies. Though still being a hobby project, we have much bigger aspirations now.",
    },
  ];

  const faqFeaturesQAsList = [
    {
      q: "Q: How often do you add new features?",
      a: "We are doing our best to ship new features weekly. Although this frequency might change, since our team might get busy with other things or just lazy.",
    },
    {
      q: "Q: What features are you currently working on?",
      a: "To discover what features we are currently working on, please, visit our GitHub or subscribe to our amazing newsletter!",
    },
  ];

  const faqCommunityQAsList = [
    {
      q: "Q: How can I join the upTicket community?",
      a: "To join our community, feel free to visit our GitHub and make a pull request with the next million dollar feature!",
    },
    { q: "Q: How large is the upTicket team?", a: "upTicket team currently consists of 3 people. Still, we all feel just like one individual!" },
  ];

  const handleFaqOptionClick = (para) => {
    setSelectedPara(para.id);
  };

  return (
    <section className={styles.faq_section} id="faq-section">
      <h2>Have a question?</h2>
      <p className={styles.under_header_para}>Explore some of the most frequently asked questions by our community</p>
      <div className={styles.faq_options}>
        {faqOptionsList.map((faqOption) => {
          return (
            <p className={selectedPara === faqOption.id ? styles.active : ""} onClick={() => handleFaqOptionClick(faqOption)}>
              {faqOption.text}
            </p>
          );
        })}
      </div>
      <div className={styles.all_faqs_wrapper}>
        {selectedPara === 1 &&
          faqCompanyQAsList.map((qa) => {
            return <SingleQa q={qa.q} a={qa.a} />;
          })}
        {selectedPara === 2 &&
          faqFeaturesQAsList.map((qa) => {
            return <SingleQa q={qa.q} a={qa.a} />;
          })}
        {selectedPara === 3 &&
          faqCommunityQAsList.map((qa) => {
            return <SingleQa q={qa.q} a={qa.a} />;
          })}
      </div>
    </section>
  );
};

export default Faq;
