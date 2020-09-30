import React from "react";
import {RegistrationPage} from "./m1-ui/r1-Registration/RefistrationPage";
import {LoginPage} from "./m1-ui/r2-Login/LoginPage";
import {ProfilePage} from "./m1-ui/r3-Profile/ProfilePage";
import {PasswordRecoveryPage} from "./m1-ui/r4-PasswordRecovery/PasswordRecoveryPage";
import {NewPasswordPage} from "./m1-ui/r5- NewPassword/NewPasswordPage";
import {HashRouter, Route} from "react-router-dom";

export const Main = () => {
    return (
        <HashRouter>
        <div>
            <h1>Cards</h1>
            <Route path="/Registration" component={RegistrationPage}/>
            <Route path="/Login" component={LoginPage}/>
            <Route path="/Profile" component={ProfilePage}/>
            <Route path="/PasswordRecovery" component={PasswordRecoveryPage}/>
            <Route path="/NewPassword" component={NewPasswordPage}/>
        </div>
        </HashRouter>
    )
}