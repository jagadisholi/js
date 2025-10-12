// example of primitive data type 
let n =1 ; 
console.log(n);

let a = Infinity;
console.log(a);

let q = 0/0;
console.log(q);

let s1 = " hello hello hello ";
console.log(s1);

let s2 = `he is mr ${s1}`;

console.log(s2);

let b1 = true; 
console.log(b1);

let b2= false;
console.log(b2);

let volume = null; 
console.log(volume);

let aa ;
console.log(aa);

// es6 entro 

let ss1 = Symbol("ram");
let ss2 = Symbol("ram");

console.log(ss1 == ss2);

// non premitive 
let aaa ={
    type :"company",
    location :"nepal"
}

console.log(aaa.location);


let a1 = [1,2,3,4,5];
console.log(a1);

// defing a fn 
function aaaa(name) {
    return "hello, " + name +"!";
}
// calling of fn 
console.log(aaaa("hari"));


// creating a new date 
let currentDate = new Date();
console.log(currentDate);

let pattren = /hello/;

let result = pattren.test("hello, world");

console.log(result);

let sss = 2384;
console.log(typeof sss);

let qq = "hari";
let qqq ="h";
console.log(typeof qq);
console.log( typeof qqq);

// example of global scode 

var abc = 17;
console.log(abc);

let acb = 12;
console.log(acb);

const aaaaa = 12;
console.log(aaaaa);

// example of function scope
function example(){
    var x= 12;
    let y = 14;
    console.log(x,y);
    
}
example();
// console.log(x);


// example of arthimetic operator 
const sum = 5+3; 
const diff = 5-3;
const mul = 5*3;
const div = 5/3;
console.log(sum, diff, mul, div);


// assignment operator 
let nnn =10;
nnn += 5;
nnn *=4;
nnn /=10;
console.log(nnn);

// js compaision operator 
console.log(10>5);
console.log(10 === '10');

// js logical op
const qqqq = true, wwww = false;
console.log(qqqq && wwww);
console.log(qqqq || wwww);

// js bit wise op
const res = 5&1;
console.log(res);

// js ternary op
const agge = 2 ; 
const staatus = agge>=18 ? "adult" : "child";
console.log(staatus);

const namm = " hari" +" " + "bahadur";
console.log(namm);
