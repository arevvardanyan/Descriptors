const validDescriptor = function(obj,valid1,valid2){
    const {writable,enumerable,configurable} = valid1;
    const {writable1,enumerable1,configurable1} = valid2;
        let newObj = {}
            newObj = Object.defineProperties(obj, {
            name:{
                writable:writable,
                enumerable:enumerable,
                configurable:configurable
            },
            age:{
                writable:writable1,
                enumerable:enumerable1,
                configurable:configurable1,
            }
    })
    newObj.age = 18
    return newObj
}

const object1 = {
    name:"Kate",
    age:17
}

const nameRules = {
     writeble:true,
     enumerable:true,
     configurable:false
    
    
}
const ageRules = {
    writeble:false,
    enumerable:true,
    configurable:true
   
   
}

console.log(validDescriptor(object1,nameRules,ageRules));