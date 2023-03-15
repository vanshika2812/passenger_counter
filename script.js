//document.getElementById("count").innerText=5;
//let count=0;
//console.log(count);

let saveEl= document.getElementById("save-El")
let countEl = document.getElementById("count")
let count=0
function increment(){  
    count=count+1
    countEl.innerText = count
}
 function save(){
    let temp = count +"-"
    saveEl.innerText+= temp
    count=0
    countEl.innerText =count

}
