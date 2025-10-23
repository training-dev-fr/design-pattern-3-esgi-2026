import Input from "./FactoryItem/Input.js";

export default class FormFactory {
    constructor() {
    }

    async create(item){
        const module = await import(`./FactoryItem/${capitalize(item.type)}.js`);
        let Field = module.default;

        if(!(Field.prototype instanceof Input)){
            throw new Error(`${item.type } n'est pas un type de champ de formulaire valide`);
        }
        return new Field(item);
    }


}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }