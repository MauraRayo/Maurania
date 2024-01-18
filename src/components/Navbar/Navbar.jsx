
import React, { useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
      <nav className={styles.navbar}> 
        <img className={styles.title} src={getImageUrl("logo/logoMR.jpg")} alt="MR" />
        <div className={styles.menu}>
           <img className={styles.menuBtn}
            src={
                menuOpen 
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            } 
            alt="boton de Menu" 
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about"> Sobre mi </a> 
                 </li>
                 <li>
                    <a href="#experience"> Habilidades </a> 
                 </li>
                 <li>
                    <a href="#projects"> Proyectos </a> 
                 </li>
            </ul>
        </div>
      </nav>
    );
};