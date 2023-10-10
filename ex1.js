const obj = {
    _name:[],
    get name(){
        return this._name
    },
    set name(name){
        const arr = name.split(", ")
        const arr1 = [`${arr[0]} ${arr[0].length}`]
        const arr2 = [`${arr[1]} ${arr[1].length}`]
        
        this._name.push(arr1,arr2);
        return this
    }
};
obj.name = "Hamlet, Artavazd";

console.log(obj.name);