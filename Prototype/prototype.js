Array.prototype.forEach2 = function(predicate){
    for(let element of this){
        predicate(element);
    }
}

Array.prototype.map2 = function(predicate) {
    let result = [];
    for(let element of this){
        result.push(predicate(element));
    }
    return result;
}

let arr = [1,2,3,4,5];

let result = arr.map2((element) => element*2);
console.log(result);