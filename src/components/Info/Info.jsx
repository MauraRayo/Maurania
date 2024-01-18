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
                    <a href="mailto:maurarayo3@gmail.com" > <img src={getImageUrl("contact/emailIcon.png")} alt="maurarayo3@gmail.com" /></a>
                    <a href="https://www.linkedin.com/in/maurarayo/" target="_black"> <img src={getImageUrl("contact/linkedinIcon.png")} alt="in/maurarayo/"/></a>
                    <a href="https://github.com/MauraRayo" target="_black"> <img src={getImageUrl("contact/githubIcon.png")} alt="github.com/MauraRayo" /></a>
                </div>
                <button className={styles.contactBtn}>
                    <a href="/assets/contact/CVMauraniaRayo.pdf" download="CV_MauraniaRayo" > Descargar CV </a>
                </button>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Personaje"  className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}