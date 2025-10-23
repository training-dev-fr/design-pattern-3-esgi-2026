export default class Image{
    constructor(data){
        this.url = data.url;
    }

    displayDiapo(){
        return `<div class="image">
                    <img src="${this.url}" />
                </div>`;
    }
}