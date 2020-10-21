import React from "react"
import styles from "./ProfilePage.module.css"
import {Preloader} from "../r7-common/preloader/Preloader";

export const ProfilePage = () => {
    return (
        <div className={styles.profileBlock}>
            <Preloader/>
            <h2>Profile</h2>
        </div>
    )
}