"use strict";


// created variable that refers to the selectMountain ID in the mountains HTML to link them 
const selectMountain = document.getElementById("selectMountain")


// when the page loads the following info in the function init will be initialized
window.onload = init; 

// function for what happens when info is intiated
// calls the dropdown function
function init(){
    mountainDropdown();

}


// grabs info from mountainsArray in provided js file and displays the names as options
// cycles through each element in the array, recognizing each as a mountain
// each mountain name becomes a clickable option with a value and also text so it can be displayed
// adds each new upcoming option to the list of clickable options so that they're all displayed

function mountainDropdown(){
    for (let mountain of mountainsArray) {
        let option = document.createElement("option");
        option.value = mountain.name;
        option.text = mountain.name;
        selectMountain.appendChild(option);
      }
}

