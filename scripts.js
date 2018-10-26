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
  var span = document.createElement("span");
  var li = document.createElement("li");
  var liText = li.innerHTML; //creates an element "li"
  span.appendChild(document.createTextNode(timeInput));
  li.appendChild(document.createTextNode(taskInput.value + " @ "+ span));
  //makes text from the 'input field' the text of the li
  ul.appendChild(li);//adds li to the ul
  taskInput.value=""; //resets the text field
  timeInput.value="";
  displayProgress();

//Start Strikethrough
function crossOut(){
li.classList.toggle("done");
  displayProgress();
}
li.addEventListener("click", crossOut);

//End Strikethrough
//Display Progress
<<<<<<< HEAD
/*function displayProgress(){
  var progressReport = document.getElementsByClassName("progress").innerHTML;
  progressReport = progress.toString() + " of " + listLength.toString() + " Tasks Completed";
}*/
=======
function displayProgress(){
  var liLength = document.querySelectorAll("li").length;
  var tasksDone = document.querySelectorAll(".done").length;
  var progressReport = document.getElementById("progress");
  progressReport.innerHTML = tasksDone + " of " + liLength + " Tasks Completed";
}
>>>>>>> 631d4dfa8867427b5cbb2669d7791380e1340d99
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
timeInput.addEventListener("keypress", addListAfterEvent);
