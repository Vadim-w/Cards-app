import React, {KeyboardEvent} from "react";
import styles from "./MyInput.module.css"

type inputPropsType = {
    value: string
    onChange: (value: string) => void
    KeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
    error: boolean
    autoFocus: boolean
    onBlur: () => void

}

const MyInput: React.FC<inputPropsType> = React.memo((props) => {

    return (
        <div className={"myInput"}>
            <input
                autoFocus={props.autoFocus}
                onBlur={props.onBlur}
                className={props.error ? styles.inputError : styles.input}
                type="text"
                value={props.value}
                onChange={(e) => props.onChange(e.currentTarget.value)}
                onKeyPress={props.KeyPress}/>
        </div>
    )
})

export default MyInput;