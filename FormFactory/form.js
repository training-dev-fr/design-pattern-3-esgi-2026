import FormFactory from "./FormFactory.js";
let formFactory = new FormFactory();

async function loadData() {
    let result = await fetch('./dataset.json');
    let data = await result.json();
    return data;
}

async function showForm(item) {
    let element = await formFactory.create(item);
    document.querySelector('.form').appendChild(element.display());
    element.onChange((value) => {
        console.log(value);
    });

}

let data = null;

async function init() {
    data = await loadData();
    for(let element of data){
        showForm(element);
    }
}

init();