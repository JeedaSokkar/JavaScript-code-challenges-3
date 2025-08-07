function createList(){
    const ul=document.createElement("ul")
   for(let i=0;i<10;i++){
    const li=document.createElement("li");
   li.append("item" + " "+[i])
      ul.append(li)
   }
 document.body.append(ul)
}
createList()