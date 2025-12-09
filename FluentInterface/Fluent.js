export default class Fluent{
    querySelector(selector){

    }

    setColor(color){

    }

    setFontSize(size){

    }
}

let $ = (selector) => {
    let fluent = new Fluent();
    fluent.querySelector(selector);
    return fluent;
}

export {$};