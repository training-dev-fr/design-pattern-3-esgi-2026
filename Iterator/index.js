import List from "./List.js";
import Item from "./item.js";

let item3 = new Item(3,null);
let item2 = new Item(14,item3);
let item1 = new Item(5,item2);



let list = new List([item1,item2,item3]);

list.forEach(element => console.log(element.value))