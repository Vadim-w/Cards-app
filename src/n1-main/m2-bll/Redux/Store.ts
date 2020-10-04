import {combineReducers, createStore} from "redux";
import {profileReducer} from "./Reducers/profile-reducer";
import {registrationReducer} from "./Reducers/registration-reducer";
import {passwordRecoveryReducer} from "./Reducers/passwordRecovery-reducer";
import {newPasswordReducer} from "./Reducers/newPassword-reducer";
import {loginReducer} from "./Reducers/login-reducer";
import {page404Reducer} from "./Reducers/page404-reducer";


let reducers = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    profile: profileReducer,
    passwordRecovery: passwordRecoveryReducer,
    newPassword: newPasswordReducer,
    page404: page404Reducer
})

export type RootStateType = ReturnType<typeof reducers>

export const store = createStore(reducers)

// @ts-ignore
window.store = store