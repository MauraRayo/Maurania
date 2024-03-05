import React from "react";

import styles from "./Info.module.css"
import {getImageUrl, getPdfUrl} from "../../utils";

export const Info = () =>{
    return ( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title} >Hi, Soy Maurania</h2>
                <p className={styles.trabajo}>Frontend Developer</p>
                <div className={styles.contactoBtn}>
                    <a href="mailto:maurarayo3@gmail.com" > <img src={getImageUrl("contact/emailIcon.png")} alt="maurarayo3@gmail.com" /></a>
                    <a href="https://www.linkedin.com/in/maurarayo/" target="_black"> <img src={getImageUrl("contact/linkedinIcon.png")} alt="in/maurarayo/"/></a>
                    <a href="https://github.com/MauraRayo" target="_black"> <img src={getImageUrl("contact/githubIcon.png")} alt="github.com/MauraRayo" /></a>
                </div>
                <div className={styles.contactBtn}>
                     <a href={getPdfUrl("contact/CVMauraniaRayo.pdf")} download>Descargar CV</a>
                 </div>
            </div>

            <img src={getImageUrl("hero/heroImage.png")} alt="Personaje"  className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}