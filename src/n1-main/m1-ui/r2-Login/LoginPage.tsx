import React, {useState} from "react"
import styles from "./LoginPage.module.css"
import {Modal} from "../r7-common/Modal/Modal";

export const LoginPage = () => {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const [isModalOpened2, setIsModalOpened2] = useState(false)

    return (
        <div className={styles.loginBlock}>
            <h2>Login</h2>
            <div className={styles.containerModal}>
                <button className={styles.btnModal} onClick={() => setIsModalOpened(true)}>Open modal 1</button>
                <button className={styles.btnModal} onClick={() => setIsModalOpened2(true)}>Open modal 2</button>
            </div>
            {isModalOpened &&
            <Modal title={'Modal title'} onClose={() => {setIsModalOpened(false)}} duration={500} showCloseBtn>
                <p>подтвердите действие</p>
                <button onClick={ () => alert("OK")}>ok</button>
                </Modal>
            }
            {isModalOpened2 &&
                <Modal title={"Modal title 2"} onClose={() => setIsModalOpened2(false)} duration={400}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto
                        debitis dignissimos dolorum error esse excepturi explicabo facere ipsam, itaque
                        iure laborum nesciunt, nobis qui quos, voluptatum. Iusto, maxime.</p>
                </Modal>
            }

        </div>
    )
}