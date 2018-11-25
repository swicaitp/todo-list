const lastLi = document.querySelectorAll("li");
const thisLi = lastLi[lastLi.length - 1];
function crossOut(){
  this.classList.toggle("done");
}
thisLi.addEventListener("click", crossOut);
