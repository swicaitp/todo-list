const terminalInput = document.getElementById("terminal-input");
const helperTerminal = document.getElementById("helper-terminal");
const helperMessageOutput = document.getElementsByClassName("helper-message")[0];
const helperMessages = {text: "OH, you're here..."};
function welcomeMessage(){
  return new Promise(resolve => { setTimeout(() => { resolve(helperMessages.text);}, 2000);});
}
async function asyncCall(){
  console.log("calling...");
  var result = await welcomeMessage();
  helperMessageOutput.innerHTML = result;
}
asyncCall();
//   terminalInput.innerHTML = "";
// function terminalInputStart(){
//   terminalInput.innerHTML = "C:\\Users\\Meat-Bag>";
// }
// var terminalInputNextLine = function(event){
//   const keyName = "Enter";
//   const breakLine = document.createElement("br");
//   const nextLine = "C:\\Users\\Meat-Bag>";
//   if(event.key == keyName){
//     terminalInput.insertAdjacentElement("afterend", breakLine);
//     terminalInput.appendChild(nextLine);
//     console.log("I am running");
//   }
// }
// window.addEventListener("load", terminalInputStart);
// terminalInput.addEventListener("keydown", terminalInputNextLine);

