  const schema = {
    name: {
      value: "",
      writable: true,
      validate: (value) => typeof value === "string",
    },
    age: {
      value: 0,
      writable: true,
      validate: (value) => typeof value === "number" && value >= 18,
    },
  };
  
  
  function validateBySchema(object, schema) {
    for (const propName in schema) {
      const { value,  writable, validate } = schema[propName];
  
      if (!object.hasOwnProperty(propName) && !writable) {
        throw new Error(`Property '${propName}' is required but not found.`);
      }
  
      if (object.hasOwnProperty(propName)) {
        const propValue = object[propName];
  
        if (!validate(propValue)) {
          throw new Error(`Invalid value for property '${propName}'.`);
        }
  
        if (!writable) {
          Object.defineProperty(object, propName, {
            value: propValue,
            writable: false,
          });
        }
      } else {
        object[propName] = value;
      }
      return obj
    }
  }
  

  const obj = {
    name:"Arev",
    age:21
  }

 console.log(validateBySchema(obj,schema)) 
  