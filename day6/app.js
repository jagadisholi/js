let obj = {
    name : "fkasdjf",
    age : 21, 
    address : "skldfjsklaf"
};
console.log(obj);

// creating obj with object constructor 
let obj1 = new Object()
obj1.name="jflskaf",
obj1.age=12,
obj1.address="dfkaf"
console.log(obj1);
console.log(obj1.name);
console.log(obj1["age"]);
console.log(obj);
obj.age=24;
console.log(obj);
obj.job ="kldsfjal";
console.log(obj);
delete obj.job;
console.log(obj);
console.log("address" in obj);
console.log(obj.hasOwnProperty("color"));
let obj3 ={fdas : "asfdas"};
let obj2 = {...obj, ...obj3};
console.log(obj2);

function iterateobj(){
    let iterateobject={
        book : "IKIGAI",
        author : "Hector Garcia and Grancesc Miralles",
        genere: "self Help"
    };
    Object.keys(iterateobject).forEach(key =>{
        const value = iterateobject[key];
        console.log(`${key}: ${value}`);
        
    });
}

iterateobj();

// rest parameter 
function myfunc(...args){
    console.log(args);
    
}
myfunc(1,2,3,4,5,6,7);

let nn =[1,2];
let sss = [...nn,3,4,5];
console.log(sss);

// sallow copy and deep copy 
let emp ={
    eid:"E102",
    ename:"jskdlf",
    eadd:"fl;as",
    esalary : 1000000
};
console.log("employee=>", emp);

// sallow copy 
let newemp = emp;
console.log("new employee => ", newemp);

console.log("---after modification----");
newemp.ename="hari";

console.log("employee =>", emp);
console.log("new employee =>", newemp);

// deep copy
let employee={
    eid:"E102",
    ename:"jskdlf",
    eadd:"fl;as",
    esalary : 1000000
};

console.log("deep cpy");

let newemployee = JSON.parse(JSON.stringify(employee));
console.log("employee =>", employee);
console.log("new employee =>", newemployee);

console.log("-------after modification -------");
newemployee.ename="hari";

console.log("employee =>", employee);
console.log("new employee =>", newemployee);






