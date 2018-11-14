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
var titleStyle = document.getElementById("title");
var rootCustomProperties = window.getComputedStyle(document.documentElement);
var headerColorValue = rootCustomProperties.getPropertyValue("--themeColor");
var highLightColorValue = rootCustomProperties.getPropertyValue("--highLightColor");
var borderColorValue = rootCustomProperties.getPropertyValue("--borderColor");
var screenSize = window.matchMedia('(max-width <= 600px)');
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
//Start BackgroundChange//
function BackgroundChange(screenSize){
if(screenSize.matches){
      document.body.style.backgroundImage = "url('Assets/Minimalist Waves Phone.jpg')";
      console.log('I am running');
}
}
BackgroundChange(screenSize);
//End BackgroundChange//
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
    document.body.style.backgroundImage = "url('Assets/Minimalist Waves.png')";

    break;
    case optionRed.value:
    document.documentElement.style.setProperty("--themeColor", "#8c0000");
    document.documentElement.style.setProperty("--highLightColor", "#5b0000");
    document.documentElement.style.setProperty("--borderColor", "#111");
    document.body.style.backgroundImage = "url('Assets/New Face Bulb.png')";
    break;
    case optionGreen.value:
    document.documentElement.style.setProperty("--themeColor", "#72e592");
    document.documentElement.style.setProperty("--highLightColor", "#00c62e");
    document.documentElement.style.setProperty("--borderColor", "#EAEFF1");
    document.body.style.backgroundImage = "url('Assets/Disk Storage Evolution Flat Minimalist Desktop Wallpaper.jpg')";
    break;
    case defaultOption.value:
    document.documentElement.style.setProperty("--themeColor", "#333E48");
    document.documentElement.style.setProperty("--highLightColor", "#586877");
    document.documentElement.style.setProperty("--borderColor", "#EAEFF1");
    document.body.style.backgroundImage = "url('Assets/Phases of the Moon.jpg')";
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
  const inputContainer = document.querySelector('.inputContainer');
  const plus = document.getElementById("plus");
  if(inputContainer.style.display == "none"){
      inputContainer.style.display = 'flex';
  } else {
    inputContainer.style.display = "none";
  }
  if(inputContainer.style.visibility == "hidden"){
    inputContainer.style.visibility = "visible";
  } else {
    inputContainer.style.visibility = "hidden";
  }
  plus.anima
}
//End Input Pop-in//

function createListElement(){
  /*var span = document.createElement("span");
  var li = document.createElement("li");//creates an element "li"
  span.classList.add("time");
  const timeItem = `@${timeInput.value}`;
  span.insertAdjacentHTML('beforeend', timeItem);

  li.appendChild(document.createTextNode(taskInput.value));

  ul.appendChild(li);*/

  displayProgress();
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
function clock(){
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  console.log(canvas.height);
  var radius = canvas.height / 2;
  console.log(radius);
  ctx.translate(radius, radius);
  radius *= 0.90;
  console.log(radius);
  drawClock();

  function drawClock() {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
  }
  function drawFace(ctx, radius){
      var grad;
      //Start Backface
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2*Math.PI);
      ctx.fillStyle = headerColorValue;
      ctx.fill();
      //End Backface
      //Start Frontface
      //Start Outer Rim
      grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, highLightColorValue);
      grad.addColorStop(0.5, borderColorValue);
      grad.addColorStop(1.0, highLightColorValue);
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.1;
      ctx.stroke();
      //End Outer Rim
      //Start Hand Base
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
      ctx.fillStyle = borderColorValue;
      ctx.fill();
      //End Hand Base
      //End Frontface
  }
  function drawNumbers(ctx, radius){
      var ang;
      var num;
      ctx.font = radius*0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for(num = 1; num < 13; num++){
          ang = num * Math.PI / 6;
          ctx.rotate(ang);
          ctx.translate(0, -radius * 0.85);
          ctx.rotate(-ang);
          ctx.fillText(num.toString(), 0, 0);
          ctx.rotate(ang);
          ctx.translate(0, radius * 0.85);
          ctx.rotate(-ang);
      }
  }
  function drawTime(ctx, radius){
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      //Hour Start
      hour = hour % 12;
      hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (6 * 360));
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);
      //Hour End
      //Minute Start
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);
      //Minute End
      //Second Start
      second = (second * Math.PI / 30);
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }
  function drawHand(ctx, pos, length, width){
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }
  setInterval(drawClock, 1000);
}

function typeWriting(){
  var i = 0;
  var j = 0;
  var k = 0;
  var text = ["Hello.",
  "It seems you are in need of my assistance, meat-bag.",
  "How funny.",
  "I'll help you out since you're so inept."];
  console.log(text);
  var terminal = document.getElementById("welcome-message");
  var currentText;
  var currentTime = 0;
  var speed = 50;
  function incrementCurrentTime(){
    currentTime += 1;
  }
  //To find out currentTime count
  function getCurrentTime(){
    console.log(currentTime);
  }
    window.setInterval(incrementCurrentTime, 1000);
  function clearText(){
    while(terminal.firstChild){
      terminal.removeChild(terminal.firstChild);
    }
  }
  function createText(){
    var newText = document.createTextNode("");
    terminal.appendChild(newText);
  }
  function helloAndWelcome(){
    var currentText = text[0];
    if(i < currentText.length){
      terminal.innerHTML += currentText.charAt(i);
      i++;
      setTimeout(helloAndWelcome, speed);
    }
  }
  function setClearCreate(milliseconds){
    window.setTimeout(clearText, milliseconds);
    window.setTimeout(createText, milliseconds);
  }
  setClearCreate(1000);
  //Call Welcome Message
  helloAndWelcome();
  //Reset Text

  //Next Function to be Called
  function itSeems(){
    currentText = text[1];
    if(j < currentText.length){
      terminal.innerHTML += currentText.charAt(j);
      j++;
      setTimeout(itSeems, speed);
    }
  }
  setClearCreate(3000);
  setTimeout(itSeems, 1000);
  function howFunny(){
    currentText = index[2];
    if(k < currentText.length){
      terminal.innerHTML += currentText.charAt(k);
      k++
      setTimeout(howFunny, speed);
    }
  }
  setClearCreate(4000);
}

enterButton.addEventListener("click", addListAfterClick);
taskInput.addEventListener("keypress", addListAfterEvent);
timeInput.addEventListener("keypress", addListAfterEvent);
window.addEventListener("load", typeWriting);
window.addEventListener("load", clock);
