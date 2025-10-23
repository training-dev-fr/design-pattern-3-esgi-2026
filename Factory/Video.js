export default class Video{
    constructor(data){
        this.url = data.url;
    }

    displayDiapo(){
        return `<div class="video">
                    <video src="${this.url}" />
                </div>`;
    }
}