import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
    error: ServerError | null = null;
    token: string | null = window.localStorage.getItem('jwt');
    appLoaded = false;

    constructor() {
        makeAutoObservable(this);

        reaction(                   // react to any changes of observables automatically
            () => this.token,
            token => {
                if (token) {        // if there is a token available from the API, store the token in the browsers local storage
                    window.localStorage.setItem('jwt', token)       // set the key 'jwt' and the value - token
                } else {
                    window.localStorage.removeItem('jwt')
                }
            }
        )
    }

    setServerError = (error: ServerError) => {
        this.error = error;
    }

    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true; 
    }
}
