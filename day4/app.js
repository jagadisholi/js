function greet(name){
    console.log("hello"+ name);
    
}
greet("alice");

function sum(x,y) {
    return x + y;
    }
let result = sum(3,4);
console.log(result);


// anonymous fn 
const gret = function(){
    return "hello";
}
console.log(gret());

const add = function(x,y){
    return x+y;
}
console.log(add(2,3));

// js arrow fucntion 
const sq = n =>n*n;
console.log(sq(4));

// call back function 
function num(n, callback){
    return callback(n);
    
}
let double = (n) =>n *2;
console.log(num(5, double));

// reversive function 
function factorial(n){
    if (n===0) return 1; 
    return n*factorial(n-1);
}
console.log(factorial(5));

// nested funciton 
function outerfun(a){
    function innerfun(b){
        return a * b;
    }
    return innerfun;
}

const addvalue = outerfun(12);
console.log(addvalue(5));
 
// map function 
const n = [1,2,3,4,5,6, -1];
const squ = n.map((num) => num *num);
console.log(squ);

// filter function 

const arr = [1,2,3,4,5,6,7,8,9,10, -2];
const even =arr.filter((num) => num %2 === 0);
console.log(even);

// reduce fn
const sm = arr.reduce((acc, curr) => acc+curr, 0);
console.log(sm);

// for each 
arr.forEach((num) => console.log(num *num));

// find the first even number of array
const fEven = n.find((num) => num%2 ===0);
console.log(fEven);

// some fn check one element satifies the given considion  
const Neg = n.some((num) =>num < 0);
console.log(Neg);

// every fn  checks all the element satisfies 
const pos = arr.every((num) =>num > 0)
console.log(pos);

// using itreration 
function fact(x){
    let res = 1;
    for (let i =1; i <=x; i++){
        res*= i;
    }
    return res;
}
console.log(fact(5));

// using recursion 
function factr(r){
    if(r === 0 || r ===1){
        return 1; 
    }
    return r * factr(r-1);
}
console.log(factr(5));

// using while loop 
function factw(w){
    let resw = 1; 
    while(w>1){
        resw = resw* w;
        w--;
    }
    return resw;
}

console.log(factw(5));

// using memonization 

const factm = (function(){
    const cache ={};
    return function factmo(m){
        if(m===0 || m ===1 ){
            return 1;
        }
        if(cache[m]){
            console.log("value from cache");
            return cache[m];
        }
        cache[m] = m*factmo(m-1);
        return cache[m];
    };
})();
console.log(factm(5));

// using functional programming 
const factf = (f) => f ===0 || f===1 ? 1 : Array.from({length: f}, (_, i) => i+1).reduce((acc, num) =>acc *num, 1);
    console.log(factf(5));
    
