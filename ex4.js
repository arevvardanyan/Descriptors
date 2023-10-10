let object = {
    name:"Arev",
    age:"21"
}
object = Object.defineProperties(object,{
    name:{
        writable:false
    },
    age:{
        writable:false
    }
})
const deepClone = function(obj){
    const {writable,enumerable,configurable} = obj
    let clonedObj = {};

    for(let key in obj){
        clonedObj[key] = obj[key]
    }
    clonedObj = Object.defineProperties(clonedObj,{
        name:{
            writable:writable,
            enumerable:enumerable,
            configurable:configurable
        },
        age:{
            writable:writable,
            enumerable:enumerable,
            configurable:configurable
        }
    })
    return clonedObj
}


console.log(deepClone(object))
console.log(object)