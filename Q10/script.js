let element=document.getElementById("Title");

element.addEventListener("mouseover",function(){
    element.style.color="red";
})

element.addEventListener("mouseout", function(){
    element.style.color="black";
})