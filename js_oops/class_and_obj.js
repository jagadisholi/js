// class dog{
//     static sound = 'bark'; // class property
// }

// let dog_one = new dog();

// console.log(dog.sound);
 
// prototype based  inheritance 
function Animal(name){
this.name = name;
}
Animal.prototype.speak = function(){
    console.log(`${this.name} makes sound.`);
    
};

// child constructr fn
function Dog(name){
    Animal.call(this, name); // inherit the properties
}
// inherit form animal method
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// add new method to dog
Dog.prototype.bark = function(){
    console.log(`${this.name} bark: how how how`);
    };
    // create an instacne 
    const myDog = new Dog("buddy")

myDog.speak(); 
myDog.bark();

// inherit with obj.create()

let obj ={
    name:"Hero",
    age:21,
    print(){
        return`my name is ${this.name}`;
    }
}

let obj1 = Object.create(obj)
obj1.name = "hi";
console.log(obj1.age);
console.log(obj1.print());

