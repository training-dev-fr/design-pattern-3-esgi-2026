import Input from "./Input.js";

export default class Email extends Input{
    constructor(item) {
        super(item);
    }

    display() {
        this.email = document.createElement('input');
        this.email.type="email";
        return super.display(this.email);
    }

    onChange(callback){
        this.email.addEventListener('keyup',() => callback(this.email.value))
    }
} 