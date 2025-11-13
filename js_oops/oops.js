class dog{
    constructor(name){
        this.name =name;
    }
    get dogname(){ // getter method
        return this.name;    
    }
    //setter method
    set dogname(newname){
        this.name =newname;
    }
    //regular method
    dog__regular_method(){
        console.log(`${this.name} says woof!`);
        
    }
}

let mydog = new dog("abc");  // using getter method
console.log(mydog.name);

mydog.dogname = 'abb' //using setter method
console.log(mydog.name);

mydog.dog__regular_method();

