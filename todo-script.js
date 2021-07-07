const lastLi = document.querySelectorAll("li");
for(let i = 0; i < lastLi.length; i++){
  lastLi[i].classList.add("task-list-li");
}
function crossOut(){
  this.classList.toggle("done");
  var thisChildren = this.children;
  var childCount = this.childElementCount;
  if(this.classList.contains("done")){
    this.style.borderColor = "#FFB000";
    for(let i = 0; i < childCount; i++){
      thisChildren.item(i).style.color = "#FFB000";
      thisChildren.item(i).style.borderColor = "#FFB000";
    };
  } else {
    this.style.borderColor = "#32CD32";
    for(let i = 0; i < childCount; i++){
      thisChildren.item(i).style.color = "#32CD32";
      thisChildren.item(i).style.borderColor = "#32CD32";
    };
  }
}
for(let i = 0; i < lastLi.length; i++){
  lastLi[i].addEventListener("click", crossOut);
}
