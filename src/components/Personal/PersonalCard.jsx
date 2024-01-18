import React from "react";

import styles from "./PersonalCard.module.css";
import { getImageUrl } from "../../utils";


export const PersonalCard = ({
    personal:  { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <figure>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
          />
          <div className={styles.conta}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>
            <div className={styles.links}>
              <a href={demo} className={styles.link}>Web</a>
              <a href={source} className={styles.link}>Código</a>
            </div>
          </div>
       </figure>
    </div>
  );
};