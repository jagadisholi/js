const age = 18 ;
if(age >=18)
{
    console.log("he is adult");
    
}

const age1 = 18 ;
if(age1 <8)
{
    console.log("he is adult");
    
}

else
{
    console.log("he is child");
    
}

const temp = 26 ;
if(temp >35)
    {
        console.log("today is hot");
    }
else if(temp >25)
    {
    console.log("today is good");
    }
else
    {
        console.log("todday is cold ");
    }


let day = "5";
switch (day){
    case "1":
        console.log("today is sunday");
        break;
    case"2":
        console.log("today is monday");
        break;
    case "3":
        console.log("today is tuesday");
        break;
    
    default:
        console.log("Please choose any of value realted to 1,2,3");
        }

// ternary op 
let a = 12;
console.log(a === 5 ? "a is eql to 5 " : " a is not eql to 5");


// js for loop 
for (let i = 0; i<=5; i++){
    console.log("value of i : "+ i);
    }


    let iii = 5;
for(let x = 1; x<=10; x++)
{
    console.log(iii*x);
    
}

// js while loop 

let count =1 ; 
while(count <=5){
    console.log(count);
    count ++;    
}

let arr = [10,12,13,14];
let i = 0;
while(i < arr.length){
    console.log(arr[i]);
    i++;
}

// do while 

let sss = 1; 
do{
    console.log(sss);
    sss++;
    
}
while (sss<=10) 

// finding factorail number 
function factorail(n){
    let result =1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}

console.log(factorail(5));
console.log(factorail(100000));


function findprimes(){

    let num = 2;
    while(num <=100){
        let isPrime = true;
        for(let i =2; i<=Math.sqrt(num); i++){
            if(num % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(num);
            
        }
        num ++;
    }
    
}

findprimes();
