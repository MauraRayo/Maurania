import React from "react";

import styles from "./Info.module.css"
import {getImageUrl} from "../../utils";

export const Info = () =>{
    return ( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title} >Hi, Soy Maurania</h2>
                <p className={styles.trabajo}>Frontend Developer en <a href="https://www.jobbe.es/wp/">Jobbe ETT</a></p>
                <div className={styles.contacotBtn}>
                    <a href="mailto:maurarayo3@gmail.com" > <img src="/assets/contact/emailIcon.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/maurarayo/" target="_black"> <img src="/assets/contact/linkedinIcon.png" alt="linkedin.com/MauraRayo"/></a>
                    <a href="https://github.com/MauraRayo" target="_black"> <img src="/assets/contact/githubIcon.png" alt="github.com/MauraRayo" /></a>
                </div>
                <a href="/assets/contact/CVMauraniaRayo.pdf" download="/assets/contact/CVMauraniaRayo.pdf" className={styles.contactBtn}> Descargar CV </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Personaje"  className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}