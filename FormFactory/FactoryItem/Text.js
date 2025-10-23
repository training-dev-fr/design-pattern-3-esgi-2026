import Input from "./Input.js";

export default class Text extends Input{
    constructor(item){
        super(item);
    }

    display(){
        this.text = document.createElement('input');
        this.text.type="text";
        return super.display(this.text);
    }

    onChange(callback){
        this.text.addEventListener('keyup',() => callback(this.text.value))
    }
} 