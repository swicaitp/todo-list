var db;





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


var objectStore = db.createObjectStore("todo-list", {keypath: taskInput});

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
}


}
