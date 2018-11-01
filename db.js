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
        var ul = document.querySelector("ul");
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
        ul.appendChild(listItem);
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
  var checkMinutes = now.getMinutes();
  var hourCheck = now.getHours();
  var dayCheck = now.getDay();
  var monthCheck = now.getMonth();
  var yearCheck = now.getFullYear();

  var objectStore = bd.transaction(['todo-list'], "readwrite").objectStore('todo-list');
  objectStore.openCursor().onsuccess = function(event){
var cursor = event.target.result;
  }
}
}
