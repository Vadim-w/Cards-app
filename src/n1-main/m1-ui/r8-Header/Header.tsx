import React from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.linksBlock}>
                <NavLink to="/Registration" className={styles.item} activeClassName={styles.active}>Registration</NavLink>
                <NavLink to="/Login" className={styles.item} activeClassName={styles.active}>Login</NavLink>
                <NavLink to="/Profile" className={styles.item} activeClassName={styles.active}>Profile</NavLink>
            </div>
        </div>
    )
}