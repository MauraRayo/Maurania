import React from "react";
import styles from "./Personal.module.css";

import personal from "../../data/personalProjects.json";
import { PersonalCard } from "./PersonalCard";


export const Personal = () => {
    return  (
        <section className={ styles.container} id="personal">
            <h2 className={ styles.title} >Proyectos Personales</h2>
            <div className={styles.personal}>
                {personal.map((personal, id) => {
                    return <PersonalCard key={id} personal={personal}/>
                })}
            </div>
        </section>
    );
};