import Button from "./Button.js";

let button = new Button("Cliquez ici");
document.querySelector('body').appendChild(button.render());
button.addEvent('click',() => console.log("j'ai cliqué"));

setTimeout(() => {
    button.click();
},1500)

setTimeout(() => {
    button.click();
},4000)