var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength(){
  return input.value.length;
}
function listLength(){
  return item.length;
}

function createListElement(){
  var li = document.createElement("li"); //creates an element "li"
  li.appendChild(document.createTextNode(input.value)); //makes text from the 'input field' the text of the li
  ul.appendChild(li);//adds li to the ul
  input.value=""; //resets the text field

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
input.addEventListener("keypress", addListAfterEvent);
