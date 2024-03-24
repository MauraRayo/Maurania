import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

    return (
        <section className={styles.container} id="about">
          <h2 className={styles.title}>Sobre mi</h2>
          
          <div className={styles.content}>
            <img
              src={getImageUrl("about/aboutImage.png")}
              alt="Me sitting with a laptop"
              className={styles.aboutImage}
            /> 
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                  <h3>Desarrolladora Front-end</h3>
                  <p>
                    Tengo 2 años de experiencia en desarrollo web en HTML5, CSS3, JavaScript, Bootstrap...
                    Creacion y mantenimiento de sitios web con WordPress.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      );
    };