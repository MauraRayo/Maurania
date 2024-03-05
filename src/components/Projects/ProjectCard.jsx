import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, date, source },
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
          <p className={styles.description}>{description} </p>
          <p className={styles.date}>{date} </p>
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
          </div>
        </div>
      </figure>
    </div>
  );
};