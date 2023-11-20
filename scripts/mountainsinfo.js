"use strict";

// created variable that refers to the selectMountain ID in the mountains HTML to link them 
const mountainSelectionDropdown = document.getElementById("selectMountain");

// when the page loads the following info in the function init will be initialized
window.onload = init;

// function for what happens when info is initiated
// calls the dropdown function
function init() {
    displayMountainsDropdown();
    mountainSelectionDropdown.onchange = dropdownSelection; // Fix function name here
}

// grabs info from mountainsArray in the provided js file and displays the names as options
// cycles through each element in the array, recognizing each as a mountain
// each mountain name becomes a clickable option with a value and also text so it can be displayed
// adds each new upcoming option to the list of clickable options so that they're all displayed
function displayMountainsDropdown() {
    mountainsArray.forEach(mountain => {
        let newOption = new Option(mountain.name);
        mountainSelectionDropdown.appendChild(newOption);
    });
}

// Function to handle dropdown selection
function dropdownSelection() {
    let mountainSelectedOption = mountainSelectionDropdown.value;
    for (let j = 0; j < mountainsArray.length; j++) {
        if (mountainSelectedOption == mountainsArray[j].name) {
            newMtSelected(mountainsArray[j]);
            break;
        }
    }
}

function newMtSelected(mountain) {
    let nameOfMountain = document.getElementById("mountainName");
    let elevationOfMountain = document.getElementById("elevation");
    let mountainEffort = document.getElementById("effort");
    let mountainInfo = document.getElementById("desc");
    let mountainImage = document.getElementById("mountainImage");

    mountainImage.src="images/" + mountain.img;
    mountainInfo.innerText = mountain.desc;
    nameOfMountain.innerText = "Name of Mountain: " + mountain.name;
    elevationOfMountain.innerText = "Elevation: " + mountain.elevation;
    mountainEffort.innerText = "Climbing Difficulty: " + mountain.effort; // Added colon for clarity

}

