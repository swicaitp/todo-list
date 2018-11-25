const lastLi = document.querySelectorAll("li");
function crossOut(){
  this.classList.toggle("done");
  if(this.classList.contains("done")){
    this.style.borderColor = "#FFB000";
    for(let i = 0; i > this.children.length; i++){
      this.children[i].style.fontColor = "#FFB000";
      this.children[i].style.borderColor = "#FFB000";
    }
  } else {
    this.style.borderColor = "#32CD32";
  }
}
for(let i = 0; i < lastLi.length; i++){
  lastLi[i].addEventListener("click", crossOut);
}
