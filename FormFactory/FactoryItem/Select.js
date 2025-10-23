import Input from "./Input.js";

export default class Select extends Input{
    constructor(item){
        super(item);
    }

    display(){
        this.select = document.createElement('select');
        for(let [key,value] of Object.entries(this.options)){
            let option = document.createElement('option');
            option.setAttribute('value',key);
            option.innerHTML = value;
            this.select.appendChild(option)
        }
        return super.display(this.select);
    }

    onChange(callback){
        this.select.addEventListener('change',() => callback(this.select.value))
    }
} 