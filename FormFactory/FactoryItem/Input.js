export default class Input {
    constructor(item) {
        Object.assign(this, item);
    }

    display(children) {
        let formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        if (this.label) {
            let label = document.createElement('label');
            if (this.id) {
                label.setAttribute('for', this.id);
            }
            label.innerHTML = this.label;
            formGroup.appendChild(label);
        }
        if (this.id) {
            children.setAttribute('id', this.id);
        }
        if (this.name) {
            children.setAttribute('name', this.name);
        }
        formGroup.appendChild(children);
        return formGroup;
    }
}