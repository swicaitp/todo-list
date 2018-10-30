var enterButton = document.getElementById("enter");
var taskInput = document.getElementById("taskInput");
var taskInputValue = document.getElementById('taskInputValue');
var timeInputValue = document.getElementById('timeInputValue');
var timeInput = document.getElementById("timeInput");
var dateInput = document.getElementById("dateInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var title = document.getElementById("title");
var headerbarElement = document.getElementById("headerbar");
var headerbarStyle = document.getElementById("headerbar").style;
var footerElement = document.getElementById("footer");
var footerStyle = document.getElementById("footer").style;
var titleElement = document.getElementById("title");
var titleStyle = document.getElementById("title").style;
var rootCustomProperties = window.getComputedStyle(document.documentElement);
var headerColorValue = rootCustomProperties.getPropertyValue("--themeColor");
var highLightColorValue = rootCustomProperties.getPropertyValue("--highLightColor");
var borderColorValue = rootCustomProperties.getPropertyValue("--borderColor");
var progress = 0;
//START TIME-OUT CORNER//

  //var listLength = item.length;
//END TIME-OUT CORNER//


function inputLength(){
  return taskInput.value.length;
}
//taskInput.map(({length}) => length);
function listLength(){
  return item.length;
}
//Start ColorPicker//
function colorPicker(){
  var colorPickerValue = document.getElementById("colorPickerSelect");
  var defaultOption = document.getElementById("defaultColor");
  var optionBlue = document.getElementById("lightBlue");
  var optionRed = document.getElementById("darkRed");
  var optionGreen = document.getElementById("green");
  switch(colorPickerValue.value){
    case optionBlue.value:
    document.documentElement.style.setProperty("--themeColor", "#94C3CD");
    document.documentElement.style.setProperty("--highLightColor", "#94B9CD")
    document.documentElement.style.setProperty("--borderColor", "#EAEFF1");
    document.body.style.backgroundImage = "url('Minimalist Waves.png')";
    break;
    case optionRed.value:
    document.documentElement.style.setProperty("--themeColor", "#8c0000");
    document.documentElement.style.setProperty("--highLightColor", "#5b0000");
    document.documentElement.style.setProperty("--borderColor", "#111");
    document.body.style.backgroundImage = "url('New Face Bulb.png')";
    break;
    case optionGreen.value:
    document.documentElement.style.setProperty("--themeColor", "#72e592");
    document.documentElement.style.setProperty("--highLightColor", "#00c62e");
    document.documentElement.style.setProperty("--borderColor", "#EAEFF1");
    document.body.style.backgroundImage = "url('Disk Storage Evolution Flat Minimalist Desktop Wallpaper.jpg')";
    break;
    case defaultOption.value:
    document.documentElement.style.setProperty("--themeColor", "#333E48");
    document.documentElement.style.setProperty("--highLightColor", "#586877");
    document.documentElement.style.setProperty("--borderColor", "#EAEFF1");
    document.body.style.backgroundImage = "url('Phases of the Moon.jpg')";
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
//End ColorPicker//
function updateProgress(){
  //Insert code that increments var progress every time function 'crossOut' toggles True//
}
//Start Input Pop-in//
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
//End Input Pop-in//

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

  //Start Strikethrough//
  function crossOut(){
  this.classList.toggle("done");
    displayProgress();

  }
  //End Strikethrough//

  //Add Class Delete (display:none)
  function deleteListItem(){
  thisLi.remove();
  displayProgress();
  }
  //End Ass Class Delete//



  //Start Edit Task via Input Element//
/*  function editTask(){
    var newInput = editInput.value;
    thisLi.removeChild(editInputTask);
    thisLi.removeChild(editInputTime);

  }
  //End Edit Task via Input Element//
*/
const newItem = `<li> <div class="taskContainer"> <span id="taskInputValue">${taskInput.value}</span> <button class="deleteButton"><i class="fas fa-times"></i></button> <button class="editButton"><i class="far fa-edit"></i></button> <span class="timeInputValue">${dateInput.value} @ ${timeInput.value}</span> </div> </li>`;
  ul.insertAdjacentHTML('beforeend', newItem);//adds li to the ul
  //taskInput.value=""; //resets the text field
  //timeInput.value="";

  //Point to Elements//
const lastLi = document.querySelectorAll('li');
const thisLi = lastLi[lastLi.length - 1];
const deleteBtn = document.querySelectorAll('.deleteButton');
const thisDeleteBtn = deleteBtn[deleteBtn.length - 1];
const editButton = document.querySelectorAll('.editButton');
const thisEditButton = editButton[editButton.length - 1];
//Add Event Listeners
thisLi.addEventListener('click', crossOut);
thisDeleteBtn.addEventListener('click', deleteListItem);
//thisEditButton.addEventListener('click', editTaskInput);
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
//Start Append Edit Task Input Element//
/*function editTaskInput(){
  const editInputTask = document.createElement('input');
  const editInputTime = document.createElement('input');
  taskInputValue.value.append(editInputTask.value);
  timeValue.value.append(editInputTime.value);

  var timeData = thisLi.querySelectorAll('timeInputValue');
  var dateTime = timeData[timeData.length - 1];
  thisLi.appendChild(editInputTask);
  thisLi.appendChild(editInputTime);
  editInputTask.classList.add(".editInputTask");
  editInputTime.classList.add('.editInputTask');
  thisEditButton.addEventListener('click', editTask);
  console.log("I am running.");
}*/
//End Append Edit Task Input Element//
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


