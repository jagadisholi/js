let c =0, ci =0, cd =0;
const count =document.getElementById("count");
const incCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");
function inc(){
    /* `c++;` is incrementing the value of the variable `c` by 1. It is equivalent to `c = c + 1;`. */
    c++;
    // c = (c >=10) ? 0 : c+1; // counter ci= inc counter , cd =decrement counter
    ci =(ci>=10) ?0 : ci+1;
    update();
}

function dec(){
    c = c>0 ? c-1: 0;
    cd = (cd>=10) ? 0 : cd +1;
    update();
}
function update(){
    incCount.textContent = ci;
    decCount.textContent = cd;
    count.textContent = c;
}