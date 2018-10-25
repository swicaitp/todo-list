var enterButton = document.getElementById("enter");
var taskInput = document.getElementById("taskInput");
var timeInput = document.getElementById("timeInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
  return taskInput.value.length;
}
function listLength(){
  return item.length;
}

function createListElement(){
  var li = document.createElement("li"); //creates an element "li"
  li.appendChild(document.createTextNode(taskInput.value + " @ " + timeInput.value)); //makes text from the 'input field' the text of the li
  ul.appendChild(li);//adds li to the ul
  taskInput.value=""; //resets the text field
  timeInput.value="";

//Start Strikethrough
function crossOut(){
li.classList.toggle("done");
}
li.addEventListener("click", crossOut);
//End Strikethrough

//START ADD DELETE BUTTON
var deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteListItem);

//Add Class Delete (display:none)
function deleteListItem(){
li.classList.add("delete");
}
//End Ass Class Delete

}

function addListAfterClick(){
  if(inputLength()>0){
    createListElement();
  }
}
function addListAfterEvent(event){
if(inputLength() > 0 && event.which === 13){
  createListElement();
}
}
enterButton.addEventListener("click", addListAfterClick);
taskInput.addEventListener("keypress", addListAfterEvent);
