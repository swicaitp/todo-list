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
const goTerminal = document.getElementById("terminalDimension");
var rootCustomProperties = window.getComputedStyle(document.documentElement);
var headerColorValue = rootCustomProperties.getPropertyValue("--themeColor");
var highLightColorValue = rootCustomProperties.getPropertyValue("--highLightColor");
var borderColorValue = rootCustomProperties.getPropertyValue("--borderColor");
var terminalColor = rootCustomProperties.getPropertyValue("--terminalColor");
var fontColor = rootCustomProperties.getPropertyValue("--fontColor");
var backfaceColor = headerColorValue;
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
  var topTitle = document.getElementById("topTitle");
  var banner = document.getElementById("banner");
  var plus = document.getElementById("plus");
  var ghost = document.getElementById("ghost");
  var progress = document.getElementById("progress");
  var progressBar = document.getElementById("progressBar")
  var progressBarFill = document.getElementById("progressBarFill");
  var propertyStamp = document.getElementsByClassName("property-stamp")[0];
  var taskInputField = document.getElementById("taskInput");
  var timeInputField = document.getElementById("timeInput");
  var dateInputField = document.getElementById("dateInput");
  var defaultOption = document.getElementById("defaultColor");
  var optionBlue = document.getElementById("lightBlue");
  var optionRed = document.getElementById("darkRed");
  var optionGreen = document.getElementById("green");
  var terminalOption = document.getElementById("terminal-theme");
  function themeChange(themecolor, highlightcolor, bordercolor, fontcolor, toptitlefont, bannerfont, progressfont, propertystampfont, backgroundimage){
    document.documentElement.style.setProperty("--themeColor", themecolor);
    document.documentElement.style.setProperty("--highLightColor", highlightcolor);
    document.documentElement.style.setProperty("--borderColor", bordercolor);
    document.documentElement.style.setProperty("--fontColor", fontcolor);
    topTitle.style.fontFamily = toptitlefont;
    banner.style.fontFamily = bannerfont;
    progress.style.fontFamily = progressfont;
    propertyStamp.style.fontFamily = propertystampfont;
    backfaceColor = rootCustomProperties.getPropertyValue("--themeColor");
    document.body.style.backgroundImage = "url('" + backgroundimage + "')";
    progressBar.style.backgroundColor = rootCustomProperties.getPropertyValue("--themeColor");
    progressBarFill.style.backgroundColor = rootCustomProperties.getPropertyValue("--goldenHighlightColor");
  }
  switch(colorPickerValue.value){

    case optionBlue.value:
    themeChange("#94C3CD", "#94B9CD", "#EAEFF1", "#EAEFF1", "Permanent Marker", "foxlite_scriptregular", "Permanent Marker", "Open Sans", "Assets/Minimalist Waves.png", );
    if(taskInputField.classList.contains("terminal-input")){
      taskInputField.classList.remove("terminal-input");
      timeInputField.classList.remove("terminal-input");
      dateInputField.classList.remove("terminal-input");
    }
    break;

    case optionRed.value:
    themeChange("#8c0000", "#5b0000", "#111", " #EAEFF1", "Permanent Marker", " foxlite_scriptregular", "Permanent Marker", "Open Sans", "Assets/New Face Bulb.png");
    if(taskInputField.classList.contains("terminal-input")){
      taskInputField.classList.remove("terminal-input");
      timeInputField.classList.remove("terminal-input");
      dateInputField.classList.remove("terminal-input");
    }
    break;

    case optionGreen.value:
    themeChange("#72e592", "#00c62e", "#EAEFF1", "#EAEFF1", "Permanent Marker", "foxlite_scriptregular", "Permanent Marker", "Open Sans", "Assets/Disk Storage Evolution Flat Minimalist Desktop Wallpaper.jpg");
    if(taskInputField.classList.contains("terminal-input")){
      taskInputField.classList.remove("terminal-input");
      timeInputField.classList.remove("terminal-input");
      dateInputField.classList.remove("terminal-input");
    }
    break;

    case defaultOption.value:
    themeChange("#333E48", "#586877", "#EAEFF1", "#EAEFF1", "Permanent Marker", "foxlite_scriptregular", "Permanent Marker", "Open Sans", "Assets/Phases of the Moon.jpg");
    if(taskInputField.classList.contains("terminal-input")){
      taskInputField.classList.remove("terminal-input");
      timeInputField.classList.remove("terminal-input");
      dateInputField.classList.remove("terminal-input");
    }
    break;

    case terminalOption.value:
    document.documentElement.style.setProperty("--themeColor", "#000000");
    document.documentElement.style.setProperty("--highLightColor", "#32CD32");
    document.documentElement.style.setProperty("--borderColor", "#32CD32");
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    document.documentElement.style.setProperty("--fontColor" , "#32CD32");
    taskInputField.classList.add("terminal-input");
    timeInputField.classList.add("terminal-input");
    dateInputField.classList.add("terminal-input");
    topTitle.style.fontFamily = "px-vga";
    banner.style.fontFamily = "px-vga";
    progress.style.fontFamily = "px-vga";
    propertyStamp.style.fontFamily = "px-vga";
    backfaceColor = "black";
    progressBar.style.backgroundColor = "#32CD32"
    progressBarFill.style.backgroundColor = "#FFB000";
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
      ctx.arc(0, 0, (radius * 1.05), 0, 2*Math.PI);
      ctx.fillStyle = rootCustomProperties.getPropertyValue("--themeColor");;
      ctx.fill();
      //End Backface
      //Start Frontface
      //Start Outer Rim
      //Gradient Start
      // grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      // grad.addColorStop(0, window.getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      // grad.addColorStop(0.5, window.getComputedStyle(document.documentElement).getPropertyValue("--themeColor"));
      // grad.addColorStop(1.0, window.getComputedStyle(document.documentElement).getPropertyValue("--fontColor"));
      ctx.strokeStyle = window.getComputedStyle(document.documentElement).getPropertyValue("--fontColor");
      //Gradient End
      ctx.lineWidth = radius * 0.05;
      ctx.stroke();
      //End Outer Rim
      //Start Hand Base
      ctx.beginPath();
      ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
      ctx.fillStyle = window.getComputedStyle(document.documentElement).getPropertyValue("--fontColor");
      ctx.fill();
      //End Hand Base
      //End Frontface
  }
  function drawNumbers(ctx, radius){
      var ang;
      var num;
      ctx.font = radius*0.30 + "px px-vga";
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
      hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360* 60));
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
//Get Helper-Button
const helperButton = document.getElementById("helper-button");
//Counter for times asked for assistance
var timesHelper = 0;
function typeWriting(){
  var text = [
    {id: 0, text: "Initializing...", executed: false},
    {id: 1, text: "Hello.", executed: false},
    {id: 2, text: "It seems you are in need of my assistance, meat-bag.", executed: false},
    {id: 3, text: "How funny.", executed: false},
    {id: 4, text: "I'll help you out since you're so inept.", executed: false},
    {id: 5, text: "See that big plus sign in the top right corner?", executed: false},
    {id: 6, text: "Click that with your big sausage fingers.", executed: false},
    {id: 7, text: "Now, I'll explain this as slowly as possible for a meat-popsicle such as yourself.", executed: false},
    {id: 8, text: "The left most box that appears is the name you'll be assigning to your meaningless task.", executed: false},
    {id: 9, text: "The box to the right of that is the time you wish to set for doing that task.", executed: false},
    {id: 10, text: "The right most box is the date box, where you select whether the task will be for today, or at a later date.", executed: false},
    {id: 11, text: "Once you're done drooling all over the place, smash your grubby mitts into the keyboard until you're satisfied with your entries, then hit the submit button to the right of the time assignment box.", executed: false},
    {id: 12, text: "All done! Goodbye! Leave me alone! It's time for me to dream of electric sheep.", executed: false},
    {id: 13, text: "Exiting...", executed: false}
  ];
  const blinkingCursor = document.getElementById("blinking-cursor");
  const toDoHelper = document.getElementById("to-do-helper");
  const taskInputField = document.getElementById("taskInput");
  const timeInputField = document.getElementById("timeInput");
  const dateInputField = document.getElementById("dateInput");
  const enterButton = document.getElementById("enter");
  const plusButton = document.getElementById("plus");
  var terminal = document.getElementById("welcome-message");
  var currentTime = 0;
  var speed = 50;
  //Display Terminal Text Cursor
  blinkingCursor.style.visibility = "visible";
  function incrementCurrentTime(){
    currentTime += 0.5;
  }
  //To find out currentTime count
  function getCurrentTime(){
    console.log(currentTime);
  }
    window.setInterval(incrementCurrentTime, 500);
  function clearText(){
    while(terminal.firstChild){
      terminal.removeChild(terminal.firstChild);
    }
  }
  function createText(){
    var newText = document.createTextNode("");
    terminal.appendChild(newText);
  }
  function setClearCreate(milliseconds){
    window.setTimeout(clearText, milliseconds);
    window.setTimeout(createText, milliseconds);
  }
  function typeWriter(){
    var h = 0;
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = 0;
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var t = 0;
    var u = 0;
    function initializing(){
      let obj = text.find(obj => obj.id == 0);
      if(h < obj.text.length){
        terminal.innerHTML += obj.text.charAt(h);
        h++;
        setTimeout(initializing, speed);
      }
    }
    function helloAndWelcome(){
      let obj = text.find(obj => obj.id == 1);
      if(i < obj.text.length){
        terminal.innerHTML += obj.text.charAt(i);
        i++;
        setTimeout(helloAndWelcome, speed);
        console.log("I am running");
      }
    }
    function itSeems(){
      let obj = text.find(obj => obj.id == 2);
      if(j < obj.text.length){
        terminal.innerHTML += obj.text.charAt(j);
        j++;
        setTimeout(itSeems, speed);
      }
    }
    function howFunny(){
      let obj = text.find(obj => obj.id == 3);
      if(k < obj.text.length){
        terminal.innerHTML += obj.text.charAt(k);
        k++;
        setTimeout(howFunny, speed);
      }
    }
    function illHelp(){
      let obj = text.find(obj => obj.id == 4);
      if(l < obj.text.length)
      {
        terminal.innerHTML += obj.text.charAt(l);
        l++;
        setTimeout(illHelp, speed);
      }
    }
    function seeThat(){
      let obj = text.find(obj => obj.id === 5);
      if(m < obj.text.length){
        terminal.innerHTML += obj.text.charAt(m);
        m++;
        setTimeout(seeThat, speed);
      }
    }
    function clickThat(){
      let obj = text.find(obj => obj.id == 6);
      if(n < obj.text.length){
        terminal.innerHTML += obj.text.charAt(n);
        n++;
        setTimeout(clickThat, speed);
      }
    }
    function nextIll(){
      let obj = text.find(obj => obj.id == 7);
      if(o < obj.text.length){
        terminal.innerHTML += obj.text.charAt(o);
        o++;
        setTimeout(nextIll, speed);
      }
    }
    function leftMost(){
      let obj = text.find(obj => obj.id == 8);
      if(p < obj.text.length){
        terminal.innerHTML += obj.text.charAt(p);
        p++;
        setTimeout(leftMost, speed);
      }
    }
    function rightMost(){
      let obj = text.find(obj => obj.id == 9);
      if(q < obj.text.length){
        terminal.innerHTML += obj.text.charAt(q);
        q++;
        setTimeout(rightMost, speed);
      }
    }
    function dateInputExplain(){
      let obj = text.find(obj => obj.id == 10);
      if(u < obj.text.length){
        terminal.innerHTML += obj.text.charAt(u);
        u++;
        setTimeout(dateInputExplain, speed);
      }
    }
    function drooling(){
      let obj = text.find(obj => obj.id == 11);
      if(r < obj.text.length){
        terminal.innerHTML += obj.text.charAt(r);
        r++;
        setTimeout(drooling, speed);
      }
    }
    function electricSheep(){
      let obj = text.find(obj => obj.id == 12);
      if(s < obj.text.length){
        terminal.innerHTML += obj.text.charAt(s);
        s++;
        setTimeout(electricSheep, speed);
      }
    }
    function exiting(){
      let obj = text.find(obj => obj.id == 13);
      if(t < obj.text.length){
        terminal.innerHTML += obj.text.charAt(t);
        t++;
        setTimeout(exiting, speed);
      }
    }
    function taskFocus(){
      taskInputField.classList.add("helperInput");
      taskInputField.focus();
    }
    function timeFocus(){
      taskInputField.classList.remove("helperInput");
      timeInputField.classList.add("helperInput");
      timeInputField.focus();
    }
    function dateFocus(){
      timeInputField.classList.remove("helperInput");
      dateInputField.classList.add("helperInput");
      dateInputField.focus();
    }
    function enterFocus(){

      enterButton.click();
    }
    function plusFocus(){
      plusButton.click();
    }
    function enterFocusStyle(){
      enterButton.style.backgroundColor = "black";
      enterButton.style.color = terminalColor;
    }
    if(currentTime == 0.5){
      let obj = text.find(obj => obj.id == 0);
      if(obj.executed == false){
        initializing();
        obj.executed = true;
        setClearCreate(2450);
      }
    }
    if(currentTime === 3){
      //Display Helper
      toDoHelper.style.visibility = "visible";
      let obj = text.find(obj => obj.id == 1);
      if(obj.executed == false){
        helloAndWelcome();
        obj.executed = true;
        setClearCreate(1950);
      }
    }
    if(currentTime === 5){
      let obj = text.find(obj => obj.id == 2);
      if(obj.executed == false){
        itSeems();
        obj.executed = true;
        setClearCreate(4950);
      }
    }
    if(currentTime === 10){
      let obj = text.find(obj => obj.id == 3);
      if(obj.executed == false){
        howFunny();
        obj.executed = true;
        setClearCreate(1950);
      }
    }
    if(currentTime === 12){
      let obj = text.find(obj => obj.id == 4);
      if(obj.executed == false){
        illHelp();
        obj.executed = true;
        setClearCreate(4950);
      }
    }
    if(currentTime == 17){
      let obj = text.find(obj => obj.id == 5);
      if(obj.executed == false){
        seeThat();
        obj.executed = true;
        setClearCreate(5950);
      }
    }
    if(currentTime == 23){
      let obj = text.find(obj => obj.id == 6);
      if(obj.executed == false){
        clickThat();
        obj.executed = true;
        setClearCreate(4950);
      }
    }
    if(currentTime == 27){
      plusFocus();
    }
    if(currentTime == 28){
      let obj = text.find(obj => obj.id == 7);
      if(obj.executed == false){
        nextIll();
        obj.executed = true;
        setClearCreate(6950);
      }
    }
    if(currentTime == 35){
      taskFocus();
      let obj = text.find(obj => obj.id == 8);
      if(obj.executed == false){
        leftMost();
        obj.executed = true;
        setClearCreate(6950);
      }
    }
    if(currentTime == 42){
      timeFocus();
      let obj = text.find(obj => obj.id == 9);
      if(obj.executed == false){
        rightMost();
        obj.executed = true;
        setClearCreate(5950);
      }
    }
    if(currentTime == 48){
      dateFocus();
      let obj = text.find(obj => obj.id == 10);
      if(obj.executed == false){
        dateInputExplain();
        obj.executed = true;
        setClearCreate(7950);
      }
    }
    if(currentTime == 56){
      enterFocus();
      let obj = text.find(obj => obj.id == 11);
      if(obj.executed == false){
        drooling();
        obj.executed = true;
        setClearCreate(13950);
      }
    }
    if(currentTime == 68){
      let i = 0;
      while(i < 3){
        setTimeout(enterFocus(), 500);
        i++;
      }
    }

    if(currentTime == 70){
      let obj = text.find(obj => obj.id == 12);
      if(obj.executed == false){
        electricSheep();
        obj.executed = true;
        setClearCreate(5950);
      }
    }
    if(currentTime == 76){
      //Hide Helper
      toDoHelper.style.visibility = "hidden";
      let obj = text.find(obj => obj.id == 13);
      if(obj.executed == false){
        exiting();
        obj.executed = true;
        setClearCreate(3000);
      }
    }
    if(currentTime == 79){
      //Hide Cursor
      blinkingCursor.style.visibility = "hidden";
    }
  }
  //Check if statements of typeWriter every half second
  setInterval(typeWriter, 500);
  timesHelper++;
}

enterButton.addEventListener("click", addListAfterClick);
taskInput.addEventListener("keypress", addListAfterEvent);
timeInput.addEventListener("keypress", addListAfterEvent);
helperButton.addEventListener("click", typeWriting);
window.addEventListener("load", clock);
