import Input from "./Input.js";

export default class Password extends Input{
    constructor(item){
        super(item);
    }

    display(){
        this.password = document.createElement('input');
        this.password.type="password";
        return super.display(this.password);
    }

    onChange(callback){
        this.password.addEventListener('keyup',() => callback(this.password.value))
    }
} 