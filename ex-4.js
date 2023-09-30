//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let messeage
switch (lightBulbStatus){
    case "On" : messeage ="Light bulb is On.";
    break;
    case "Off" : messeage = "Light bulb is Off.";
    break;
    case "Broken": messeage = "Light bulb is Broken.";
    default: messeage="Please choose the correct input (On/Off/Broken)"
}
console.log(messeage)