var db;
var newItem = [
  { taskTitle: "", hours: 0, minutes: 0, day: 0, month: "", year: 0, notified: "no" }
];

var taskList = document.getElementById('task-list');

var taskForm = document.getElementById('task-form');
var title = document.getElementById('title');

var hours = document.getElementById('deadline-hours');
var minutes = document.getElementById('deadline-minutes');
var day = document.getElementById('deadline-day');
var month = document.getElementById('deadline-month');
var year = document.getElementById('deadline-year');

var submit = document.getElementById('submit');
//End Global Variables//

window.load = function(){
  window.indexedDB = window.indexedDB;
  var DBOpenRequest = window.indexedDB.open("todo-list", 4);

DBOpenRequest.onerror = function(event){
  alert('Error loading Database');
}
DBOpenRequest.onsuccess = function(event){
  console.log('Successfully loaded Database');

  db = DBOpenRequest.result;

  displayData();
}

DBOpenRequest.onupgradeneeded = function(event){
var db = event.target.result;

db.onerror = function(event){
alert("Error upgrading Database");
}


var objectStore = db.createObjectStore("todo-list", {keypath: taskTitle});

objectStore.createIndex("hours", "hours", {unique: false});
objectStore.createIndex("minutes", "minutes", {unique: false});
objectStore.createIndex("day", "day", {unique: false});
objectStore.createIndex("month", "month", {unique: false});
objectStore.createIndex("year", "year", {unique: false});

objectStore.createIndex("notified", "notified", {unique: false});

console.log("objectStore Successfully created");
}

function displayData(){
  var objectStore = db.transaction('todo-list').objectStore('todo-list');
  objectStore.openCursor().onsuccess = function(event){
    var cursor = event.target.result;
      if(cursor){

        var listItem = document.createElement('li');
        if(cursor.value.day == 1 || cursor.value.day == 21 || cursor.value.day == 31){
          daySuffix = 'st';
        } else if (cursor.value.day == 2 || cursor.value.day == 22){
          daySuffix = 'nd';
        } else if (cursor.value.day == 3 || cursor.value.day == 23){
          daySuffix = 'rd';
        } else {
          daySuffix = "th";
        }
        listItem.innerHTML = cursor.taskTitle.value + ' - ' + cursor.value.hours + ':' + cursor.value.minutes + ', ' + cursor.value.month + ' ' + cursor.value.day + daySuffix + ' ' + cursor.value.year;
        if (cursor.notified == "yes"){
          crossOut();
        }
        taskList.appendChild(listItem);
        var deleteButton = document.createElement('button');
        listItem.appendChild(deleteButton);
        deleteButton.appendChild('<i class="fas fa-times"></i>');
        deleteButton.setAttribute('data-task', cursor.value.taskTitle);
        deleteButton.onclick = function(event){
          deleteItem(event);
        }
        cursor.continue();
      } else {
        console.log('Entries all displayed');
      }
  }
}
taskForm.addEventListener('submit', addData, false);
function addData(e){
e.preventDefault();
  if(title.value == ''|| hours.value == null || minutes.value == null || month.value == '' || day.value == '' || year.value == null){
    alert('Task not submitted, task form incomplete');
  } else{
    var newItem = [
      {taskTitle: title.value, hours: hours.value, minutes: minutes.value, day: day.value, month: month.value, year: year.value, notified:'no'}
    ];
    var transaction = db.transaction('todo-list', 'readwrite');
    transaction.onsuccess = function(){
      console.log('Database Transaction Success: Database Modified');
      displayData();
    }
    transaction.onerror = function(){
      console.log("Transactions not opened, error due to:" + transaction.console.error);
    }
    var objectStore = transaction.objectStore("todo-list");
    console.log(objectStore.indexNames);
    console.log(objectStore.keyPath);
    console.log(objectStore.name);
    console.log(objectStore.transaction);
    console.log(objectStore.autoIncrement);

    var objectStoreRequest =objectStore.add(newItem[0]);
    objectStoreRequest.onsuccess = function(event){
    console.log('Request Successful');
      title.value = '';
      hours.value = null;
      minutes.value = null;
      day.value = 01;
      month.value = 'January';
      year.value = 2020;
    }
  }
}
function deleteItem(){
  var dataTask =event.target.getAttribute('data-task');
  var transaction = db.transaction(["todo-list"], 'readwrite');
  var request = transaction.objectStore('todo-list').delete(dateTask);
  transaction.onsuccess = function(){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    console.log('Task ' +dataTask+ ' deleted');
  }
}
function checkDeadlines(){
  var now = new Date();
  var minuteCheck = now.getMinutes();
  var hourCheck = now.getHours();
  var dayCheck = now.getDay();
  var monthCheck = now.getMonth();
  var yearCheck = now.getFullYear();

  var objectStore = bd.transaction(['todo-list'], "readwrite").objectStore('todo-list');
  objectStore.openCursor().onsuccess = function(event){
  var cursor = event.target.result;
    if(cursor){
      switch(cursor.value.month){
        case "January":
        var monthNumber = 0;
        break;
        case "February":
        var monthNumber = 1;
        break;
        case "March":
        var monthNumber = 2;
        case "April":
        var monthNumber = 3;
        break;
        case "May":
        var monthNumber = 4;
        break;
        case "June":
        var monthNumber = 5;
        break;
        case "July":
        var monthNumber = 6;
        break;
        case "August":
        var monthNumber = 7;
        break;
        case "September":
        var monthNumber = 8;
        break;
        case "October":
        var monthNumber = 9;
        break;
        case "November":
        var monthNumber = 10;
        break;
        case "December":
        var monthNumber = 11;
        break;
        default:
        alert('Incorrect month enter in database.');
      }
      if(+(cursor.value.hours) == hourCheck && +(cursor.value.minutes) == minuteCheck && +(cursor.value.day) == dayCheck && monthNumber == monthCheck && cursor.value.year== yearCheck && cursor.value.notified =="no"){
        createNotification(cursor.value.taskTitle);
      }
      cursor.continue();
    }
  }
}

function createNotification(title){
  if(!"Notification" in window){
    console.log('This browser does not support notifications.');
  } else if (Notification.permission==="granted"){
    var img = '/Assets/sample_image.jpg';
    var text = "HEY! You've missed your deadline!";
    var notification = new Notification('To do list',{ body: text, icon: img});

    window.navigator.vibrate(500);
  } else if (Notification.permission !== 'denied'){
    Notification.requestPermission(function(permission){
      if(!('permission' in Notification)){
        Notification.permission = permission;
      }
      if(permission === "granted"){
        var img = '/Assets/sample_image.jpg';
        var text = "HEY! You've missed your deadline!";
        var notification = new Notification('To do list',{ body: text, icon: img});
      }
    });
  }
  var objectStore = db.transaction(['todo-list'], "readwrite").objectStore('todo-list');
  var objectStoreTitleRequest = objectStore.get(title);
  objectStoreTitleRequest.onsuccess = function(){
    var data = objectStoreTitleRequest.result;
    data.notified = "yes";
    var updateTitleRequest = objectStore.put(data);
    updateTitleRequest.onsuccess = function(){
      displayData();
    }
  }
}
setInterval(checkDeadlines, 1000);
}
