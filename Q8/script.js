  function toggleBtn(){
   let button=document.getElementById("btn");
    button.addEventListener("click",function(){
            button.classList.toggle("btnStyle")
    })


    }
     toggleBtn()