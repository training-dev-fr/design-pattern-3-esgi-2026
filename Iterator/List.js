export default class List {
    constructor(items) {
        this.items = items;
        this.currentItem = this.items[0];
    }

    next() {
        this.currentItem = this.currentItem.next;
    }

    isNext() {
        return this.currentItem.next !== null;
    }

    forEach(callback){
        callback(this.currentItem);
        if(this.isNext()){
            this.next();
            this.forEach(callback);
        }
    }
}