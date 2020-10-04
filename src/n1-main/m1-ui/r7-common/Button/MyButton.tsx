import React from "react";
import styles from "./MyButton.module.css"

type typeMyButton = {
    title: string
    onClick: () => void
    styleRed: boolean
}



export const MyButton:React.FC<typeMyButton> = React.memo((props) => {
    return (
        <button onClick={props.onClick} className={props.styleRed? styles.buttonRed : styles.button}>{props.title}</button>
    )
})
