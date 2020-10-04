import React from "react";
import styles from "./Main.module.css"
import {RegistrationPage} from "./m1-ui/r1-Registration/RefistrationPage";
import {LoginPage} from "./m1-ui/r2-Login/LoginPage";
import {ProfilePage} from "./m1-ui/r3-Profile/ProfilePage";
import {PasswordRecoveryPage} from "./m1-ui/r4-PasswordRecovery/PasswordRecoveryPage";
import {NewPasswordPage} from "./m1-ui/r5- NewPassword/NewPasswordPage";
import {HashRouter, Route} from "react-router-dom";
import {Page404} from "./m1-ui/r6-Page404/Page404";
import {Header} from "./m1-ui/r8-Header/Header";

export const Main = () => {
    return (
        <HashRouter>
            <Header/>
            <div className={styles.pagesBlock}>
                <Route path="/Registration" component={RegistrationPage}/>
                <Route path="/Profile" component={ProfilePage}/>
                <Route path="/Login" component={LoginPage}/>
                <Route path="/PasswordRecovery" component={PasswordRecoveryPage}/>
                <Route path="/NewPassword" component={NewPasswordPage}/>
                <Route path="/404" component={Page404}/>
            </div>
        </HashRouter>
    )
}