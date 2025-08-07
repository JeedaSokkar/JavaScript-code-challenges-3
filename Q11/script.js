function changesContent(){
let button=document.getElementById("btn")
let p=document.getElementById("par")

button.addEventListener("click",function(){
    p.textContent="Write a function that changes the text content of a paragraph whena button is clicked."
})}
changesContent()