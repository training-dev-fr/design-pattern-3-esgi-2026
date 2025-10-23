import Input from "./Input.js";

export default class Checkbox extends Input {
    constructor(item) {
        super(item);
    }

    display() {
        this.container = document.createElement('div');
        this.container.classList.add('checkbox-container');
        for (let [key, value] of Object.entries(this.options)) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            
            if (this.multiple) {
                input.setAttribute('name',this.name);
                input.setAttribute('type', 'checkbox');
            } else {
                input.setAttribute('name',"[" + this.name + "]");
                input.setAttribute('type', 'radio');
            }
            input.value = key;
            label.appendChild(input);
            label.innerHTML += value;
            this.container.appendChild(label)
        }
        return super.display(this.container);
    }

    onChange(callback) {
        let multipleValue = [];
        this.container.querySelectorAll('input').forEach(input => {
            input.addEventListener('click', () => {
                if (this.multiple) {
                    if(multipleValue.some(value => value === input.value)){
                        multipleValue = multipleValue.filter(value => value !== input.value);
                    }else{
                        multipleValue.push(input.value);
                    }
                    callback(multipleValue);
                } else {
                    callback(input.value);
                }
            })
        })
    }
} 