export default class Button{
    constructor(){
        this.eventList = [];
    }

    render(label){
        this.button = document.createElement('button');
        this.button.innerHTML = label;
        return this.button;
    }

    click(){
        for(let event of this.eventList.filter(event => event.event === "click")){
            event.callback();
        }
    }

    addEvent(event, callback){
        this.eventList.push({event: event, callback: callback});
    }
}