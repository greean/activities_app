import { makeAutoObservable } from "mobx";

export default class ActivityStore {
    title = 'Hello from MobX!';

    constructor() {
        makeAutoObservable(this)
    }

    setTitle = () => {
        this.title = this.title + '!';
    }

    remChar = () => {
        this.title = this.title.slice(0, -1);
        console.log(this.title);
    }
}