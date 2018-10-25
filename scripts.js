var enterButton = document.getElementById("enter");
var taskInput = document.getElementById("taskInput");
var timeInput = document.getElementById("timeInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
//var listLength = item.length;
var progress = 0;

function inputLength(){
  return taskInput.value.length;
}
function listLength(){
  return item.length;
}
function updateProgress(){
  //Insert code that increments var progress every time function 'crossOut' toggles True//
}
function showInput(){
  if(taskInput.style.display === "none" && timeInput.style.display === "none" && enterButton.style.display === "none"){
      taskInput.style.display = "inline";
      timeInput.style.display = "inline";
      enterButton.style.display = "inline";
  } else {
    taskInput.style.display = "none";
    timeInput.style.display = "none";
    enterButton.style.display = "none";
  }
  if(taskInput.style.visibility === "hidden" && timeInput.style.visibility === "hidden" && enterButton.style.visibility === "hidden"){
    taskInput.style.visibility = "visible";
    timeInput.style.visibility = "visible";
    enterButton.style.visibility = "visible";
  } else {
    taskInput.style.visibility = "hidden";
    timeInput.style.visibility = "hidden";
    enterButton.style.visibility = "hidden";
  }
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
if(li.classList.contains("done") == true){
  progress++;
  displayProgress(progress);
} else {
  progress--;
  displayProgress(progress);
}
}
li.addEventListener("click", crossOut);

//End Strikethrough
//Display Progress
function displayProgress(progress){
  var progressReport = document.getElementsByClassName("progress").innerHTML;
  progressReport = progress.toString() + " of " + listLength.toString() + " Tasks Completed";
}
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
