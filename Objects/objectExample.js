const obj = {
    name: "Felicity",
    age: 25,
    "fave-food": "Spaghetti",
    sayMyName: function() {
        console.log(this.name)
    }
}

// to add a new property to the object
obj.hobby = "reading"

// to access an object property
console.log(obj.hobby)
// the bracket notation is mostly used when the key has a space or hyphen
console.log(obj['fave-food'])
obj.sayMyName()

//  some common object examples - google them and understand with examples
// object.keys(), .values() .entries()