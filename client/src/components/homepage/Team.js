import React, { useState } from "react";
import styles from "./Team.module.scss";
import mcl_1 from "../../assets/mcl_1.png";
import mcl_2 from "../../assets/mcl_2.png";
import mcl_3 from "../../assets/mcl_3.png";

const Team = () => {
  const [selectedPara, setSelectedPara] = useState(1);

  const teamOptionsList = [
    { text: "Developer", id: 1 },
    { text: "Designer", id: 2 },
    { text: "CEO", id: 3 },
  ];

  const handleTeamOptionClick = (para) => {
    setSelectedPara(para.id);
  };

  return (
    <section className={styles.team_section} id="team">
      <h2>Meet the team</h2>
      <p className={styles.under_header_para}>We are, therefore we build</p>
      <div className={styles.team_options}>
        {teamOptionsList.map((teamOption) => {
          return (
            <p className={selectedPara === teamOption.id ? styles.active : ""} onClick={() => handleTeamOptionClick(teamOption)}>
              {teamOption.text}
            </p>
          );
        })}
      </div>
      {selectedPara === 1 && (
        <div className={styles.team_member}>
          <img src={mcl_1} alt="Michal Bednář" className={styles.team_member_photo} />
          <div className={styles.team_member_name_and_message_wrapper}>
            <p className={styles.team_member_name}>Michal Bednář</p>
            <p className={styles.team_member_message}>
              "I started working at upTicket in the spring of 2022 and as soon as we launched our MVP, I knew that our designer is a much better
              employee than me."
            </p>
          </div>
        </div>
      )}
      {selectedPara === 2 && (
        <div className={styles.team_member}>
          <img src={mcl_2} alt="Miguel Bednar" className={styles.team_member_photo} />
          <div className={styles.team_member_name_and_message_wrapper}>
            <p className={styles.team_member_name}>Miguel Bednar</p>
            <p className={styles.team_member_message}>
              "I love working at upTicket. Every day, I have the chance to learn something new and valuable. Still, I think that our CEO is a much
              better human being than me."
            </p>
          </div>
        </div>
      )}
      {selectedPara === 3 && (
        <div className={styles.team_member}>
          <img src={mcl_3} alt="Mike Bednar" className={styles.team_member_photo} />
          <div className={styles.team_member_name_and_message_wrapper}>
            <p className={styles.team_member_name}>Mike Bednar</p>
            <p className={styles.team_member_message}>
              "Me and my team constantly do everything to improve our product. I couldn't be any prouder of my teammates. At this point, I feel that
              all three of us are like one."
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
