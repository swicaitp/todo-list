const terminalInput = document.getElementById("terminal-input");
const helperTerminal = document.getElementById("helper-terminal");
const Typer = {
  INNER: document.getElementsByClassName("helper-message")[0],
  DELAY: 100,
  SHORT_DELAY: 50,
  LONG_DELAY: 1000,

  pause: (milliseconds = Typer.DELAY)=> new Promise((resolve) => setTimeout(resolve, milliseconds)),

  add: async (str) => {const chars = str.split("")//Creates string type array
  for(c in chars){ //Iterates through that newly create string array "srt"
    await Typer.pause(); // Waits to finish each loop until the Typer.pause setTimeout has passed, in this case, 100 milliseconds
    Typer.INNER.innerHTML += chars[c]; //Adds each character to the inner.html of helper-message div
  }
},

  clear: async ()=> { for(let i = Typer.INNER.innerHTML.length; i > 0; i--){
    //Clears message by deleting the last character within the element over a set delay, in this case being -> SHORT_DELAY: (50);
    await Typer.pause(Typer.SHORT_DELAY);
    const newContent = Typer.INNER.innerHTML;
    Typer.INNER.innerHTML = newContent.slice(0, -1);
  }
},
  write: async (str)=> { //Writes the message, waits as per the Typer.pause, then clears the message after -> LONG_DELAY: (1000) (1SECOND);
    Typer.add(str);
    await Typer.pause(Typer.DELAY * str.length); //Awaits the appropriate time it takes to add the entire string
    await Typer.pause(Typer.LONG_DELAY); //Begins waiting for LONG_DELAY AFTER the previous Await Typer.pause();
    Typer.clear(); //Clears the message
    await Typer.pause(Typer.SHORT_DELAY * str.length); //Waits for the string to be cleared
  },
  cycleText: (arr, index = 0)=>{
    if(index === arr.length) index = 0;
      Typer.write(arr[index].text).then(()=> Typer.cycleText(arr, index+1));
  }
}

const helperMessages = [{text: "OH."}, {text: "You're here..."}, {text: "Well this is awkward"}];
Typer.cycleText(helperMessages);
// function welcomeMessage(){
//   return new Promise(resolve => { setTimeout(() => { resolve(helperMessages.text);}, 2000);});
// }
// async function asyncCall(){
//   console.log("calling...");
//   var result = await welcomeMessage();
//   helperMessageOutput.innerHTML = result;
// }
// asyncCall();
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

