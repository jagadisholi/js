// array in js 
let a = 10;
let b = 10 ; 
let c = 10; 

let num = [10, 10 , 10];
console.log(a,b,c, num);

const aa =[];
console.log(aa);


let aaa = new Array(10,10,10);
console.log(aaa);

let number = [1,2,3,4];
console.log(number[0]);
console.log(number[2]);

let first =number[0];
console.log("first item:", first);

let last = number[number.length-1];
console.log("last element:", last);

console.log(number);

// modify
number[2] = 6;
console.log(number);

// adding element on array
number.push(7);
console.log(number);
// adding element to the begining 
number.unshift(8);
console.log(number);
// removing 
number.pop();
console.log(number);
// remove first element 
number.shift();
console.log(number);
// remove 2 element starting from index 1
number.splice(1,2);
console.log(number);
// array length 
let len = number.length;
console.log("array length : "+len);
//increase and decrease 
number.length = 7;
console.log(number);

number.length = 3;
console.log(number);

// array concatination 
let concatarray = number.concat(num);
console.log(concatarray);

// type of array
console.log(typeof number);

// js array delete operator 
let emp = {
    first : "hari",
    second: "ram",
    third: "sita"
}
console.log(delete emp.third);
console.log(emp);

// js array flat( ) method 
const a1 = [[1,2],[3,4,5],[6,7], [8,9,0,1]];
const a2 = a1.flat(Infinity);
console.log(a2);

// map(), filter, reduce() in js
let arr = [2,3,4,5,6,7]
let updatearray = arr.map(val=> val+3)
console.log(arr);
console.log(updatearray);

// filter method 
let filteredarray = arr.filter(val => val <5)
console.log(filteredarray);
// reduce method
let reducedarray = arr.reduce((prev, curr)=> curr = prev + curr)
console.log(reducedarray);
// reverse method 
let reversedarray = [...arr].reverse();
console.log(reversedarray);
// reverse using a stack(LIFO)
let rev =[];
while (arr.length>0) {
    rev.push(arr.pop());
}
console.log(rev);

// min and max in js 
let arra= [12,13,14,15];
let minvale = Math.min(...arra); 
let maxvlue = Math.max(...arra);
console.log("min value is : ",minvale);
console.log("max value is :", maxvlue);



