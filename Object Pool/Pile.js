class Pile{
    constructor(){
        this.list = [];
    }

    push(element){
        this.list.push(element)
    }

    pull(){
        return this.list.pop();
    }
}