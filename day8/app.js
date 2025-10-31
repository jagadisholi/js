// document.querySelector("#validate").addEventListener("submit", (e) => {
//     let input = document.querySelector("#formInput");
//     if (!input.value) {
//         e.preventDefault();
//         alert("input cant be empty");
//     }
// });
//start => executes on first 
// set timeout schedules its call back but doesnot execute it immediatedly 
//promise.resolve().then() is placed in micro task queue and executes before the call back queue
// promises resolve appres before settimeout call back de to micro task prorority 
// console.log("start");
// setTimeout(()=>{
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() =>{
//     console.log("promise resolved");
    
// });
// console.log("end");

// let first=document.getElementById('one')
// let second=document.getElementById('two')
// let third=document.getElementById('three')
// first.addEventListener('click',function(e){
//     console.log("first clicked");
//     })
// second.addEventListener('click',function(e){
//     console.log("second clicked");
//     })
//     third.addEventListener('click',function(e){
//     console.log("third clicked");
//     })

let first=document.getElementById('one')
let second=document.getElementById('two')
let third=document.getElementById('three')
first.addEventListener('click',function(e){
    e.stopPropagation()
    console.log("first clicked");
    })
second.addEventListener('click',function(e){
    e.stopPropagation()
        console.log("second clicked");
    })
    third.addEventListener('click',function(e){
        e.stopPropagation()
    console.log("third clicked");
    })