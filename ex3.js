const Immutable = function(name,age){
    const obj = {
        name:name,
        age:age
    }
    return Object.freeze(obj)
}


const newObj = new Immutable("Arev",21)
newObj.age = 24
console.log(newObj)