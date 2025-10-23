class Multiton {

    constructor() {
        if (!Multiton.instance) {
            Multiton.instance = [this];
        } else if (Multiton.instance.length < 4) {
            Multiton.instance.push(this);
        }
        return Multiton.instance;
    }
}