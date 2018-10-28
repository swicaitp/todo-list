var enterButton = document.getElementById("enter");
var taskInput = document.getElementById("taskInput");
var timeInput = document.getElementById("timeInput");
var dateInput = document.getElementById("dateInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var title = document.getElementById("title");
var colorPickerValue = document.getElementById("colorPickerSelect");
var headerbarElement = document.getElementById("headerbar");
var headerbarStyle = document.getElementById("headerbar").style;
var footerElement = document.getElementById("footer");
var footerStyle = document.getElementById("footer").style;
var titleElement = document.getElementById("title");
var titleStyle = document.getElementById("title").style;

var progress = 0;
//START TIME-OUT CORNER//
  var headerColor = window.getComputedStyle(headerbarElement);
  var headerColorValue = headerColor.getPropertyValue("--bannerColor");
  console.log(headerColorValue);
  //var footerColor = window.getComputedStyle(footerElement);
  //var footerColorValue = footerColor.getPropertyValue("--bannerColor");
  //var listLength = item.length;
//END TIME-OUT CORNER//


function inputLength(){
  return taskInput.value.length;
}

function listLength(){
  return item.length;
}

function colorPicker(){
  var defaultOption = document.getElementById("defaultColor");
  var optionBlue = document.getElementById("lightBlue");
  var optionRed = document.getElementById("darkRed");
  var optionGreen = document.getElementById("green");
  switch(colorPickerValue.value){
    case optionBlue.value:
    headerbarStyle.backgroundColor = "#0092e7";
    headerbarStyle.borderColor = "#0092e7";
    footerStyle.backgroundColor = "#0092e7";
    progressBar.style.backgroundColor = "#0092e7";
    titleStyle.color = "#0092e7";
    titleStyle.borderBottomColor = "#0092e7";
    break;
    case optionRed.value:
    headerbarStyle.backgroundColor = "#c00000";
    headerbarStyle.borderColor = "#c00000";
    footerStyle.backgroundColor = "#c00000";
    progressBar.style.backgroundColor = "#c00000";
    titleStyle.color = "#c00000";
    titleStyle.borderBottomColor = "#c00000";
    break;
    case optionGreen.value:
    headerbarStyle.backgroundColor = "#00c62e";
    headerbarStyle.borderColor = "#00c62e";
    footerStyle.backgroundColor = "#00c62e";
    progressBar.style.backgroundColor = "#00c62e";
    titleStyle.color = "#00c62e";
    titleStyle.borderBottomColor = "#00c62e";
    break;
    case defaultOption.value:
    headerbarStyle.backgroundColor = headerColorValue;
    headerbarStyle.borderColor = "#333E48";
    footerStyle.backgroundColor = "#333E48";
    progressBar.style.backgroundColor = "#333E48";
    titleStyle.color = "#333E48";
    titleStyle.borderBottomColor = "#333E48";
    break;
    default:
    alert("That's not gonna fly, bucko");
  }
  /*if(colorPickerValue == optionBlue){
    headerbarStyle.backgroundColor = "#0092e7";
    headerbarStyle.backgroundColor = optionBlue.value;
    console.log("optionBlue is being run");
  } else if(colorPickerValue == optionRed){
    headerbarStyle.backgroundColor = optionRed.value;
    footerStyle.backgroundColor = optionRed.value;
    console.log("optionRed is being run");
  } else if (colorPickerValue == optionGreen){
    headerbarStyle.backgroundColor = optionGreen.value;
    footerStyle.backgroundColor = optionGreen.value;
    console.log("optionGreen is being run");
  }*/
  console.log(colorPickerValue.value);

  console.log("I am being run");
}
function updateProgress(){
  //Insert code that increments var progress every time function 'crossOut' toggles True//
}
function showInput(){
  if(taskInput.style.display === "none" && timeInput.style.display === "none" && enterButton.style.display === "none"){
      taskInput.style.display = "inline";
      timeInput.style.display = "inline";
      dateInput.style.display = "inline";
      enterButton.style.display = "inline";
  } else {
    taskInput.style.display = "none";
    timeInput.style.display = "none";
    dateInput.style.display = "none";
    enterButton.style.display = "none";
  }
  if(taskInput.style.visibility === "hidden" && timeInput.style.visibility === "hidden" && enterButton.style.visibility === "hidden"){
    taskInput.style.visibility = "visible";
    timeInput.style.visibility = "visible";
    dateInput.style.visibility = "visible";
    enterButton.style.visibility = "visible";
    title.style.visibility = "visible";
  } else {
    taskInput.style.visibility = "hidden";
    timeInput.style.visibility = "hidden";
    dateInput.style.visibility = "hidden";
    enterButton.style.visibility = "hidden";
  }
}

function createListElement(){
  /*var span = document.createElement("span");
  var li = document.createElement("li");//creates an element "li"
  span.classList.add("time");
  const timeItem = `@${timeInput.value}`;
  span.insertAdjacentHTML('beforeend', timeItem);

  li.appendChild(document.createTextNode(taskInput.value));
  */

  //ul.appendChild(li);

  //displayProgress();
  //Display Progress
  function displayProgress(){
    var liLength = document.querySelectorAll("li").length;
    var tasksDone = document.querySelectorAll(".done").length;
    var progressReport = document.getElementById("progress");
    progressReport.innerHTML = tasksDone + " of " + liLength + " Tasks Completed";
    var progressBar = document.getElementById("progressBar");
    var progressBarFill = document.getElementById("progressBarFill");
    var width = progressBarFill.style.width.value;
    var leftTrumpet = document.getElementById("rightFacingTrumpet");
    var rightTrumpet = document.getElementById("leftFacingTrumpet");
    var funnyTrumpetSound = document.getElementById("funnyTrumpetSound");
    var id = setInterval(frame(),(liLength));
    if(liLength == tasksDone && liLength != 0){
      rightTrumpet.classList.add("rightTrumpet");
      leftTrumpet.classList.add("leftTrumpet");
      funnyTrumpetSound.play();
    } else{
      rightTrumpet.classList.remove("rightTrumpet");
      leftTrumpet.classList.remove("leftTrumpet");
      funnyTrumpetSound.load();
      funnyTrumpetSound.pause();
    }
      function frame(){
        if(width >= (liLength*100)){
          clearInterval(id);
        } else {
          width++;
          progressBarFill.style.width = ((tasksDone/liLength)*100) +"%";
        }
      }
  }

  //Start Strikethrough
  function crossOut(){
  this.classList.toggle("done");
    displayProgress();

  }
  //End Strikethrough
  //Add Class Delete (display:none)
  function deleteListItem(){
  thisLi.remove();
  displayProgress();
  }
//End Ass Class Delete
const newItem = `<li> ${taskInput.value}<button class="deleteButton"> <i class="fas fa-times"></i></button><span class="time">@ ${timeInput.value} ${dateInput.value}</span></li>`;
  ul.insertAdjacentHTML('beforeend', newItem);//adds li to the ul
  //taskInput.value=""; //resets the text field
  //timeInput.value="";

  //Add Event Listeners
const lastLi = document.querySelectorAll('li');
const thisLi = lastLi[lastLi.length - 1];
const lastBtn = document.querySelectorAll('li > button');
const thisBtn = lastBtn[lastBtn.length - 1];

thisLi.addEventListener('click', crossOut);
thisBtn.addEventListener('click', deleteListItem);
taskInput.value="";
timeInput.value="";
displayProgress();
//START ADD DELETE BUTTON
/*var deleteBtn = document.createElement("button");
deleteBtn.appendChild(document.createTextNode("X"));
li.appendChild(deleteBtn);
deleteBtn.addEventListener("click", deleteListItem);
li.appendChild(span);*/

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


