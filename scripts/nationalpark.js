"use strict";

// upon page loading, js knows to grab these two dropdowns

let searchByLocation = document.getElementById("searchByLocation");
let searchByParkType = document.getElementById("searchByParkType");

window.onload = function (){
    console.log("Window onload event fired")
    searchByLocation.onchange = locationDropdownMenu;
}
  
// attaching locations array to states and adding options to dropdown

function locationDropdownMenu() {
    //let defaultLocationOption = new Option("Select One", "");
    //searchByLocation.appendChild(defaultLocationOption);
    for (let location of locationsArray) {
        let option = document.createElement("option");
        option.value = location;
        option.innerText = location;
        searchByLocation.appendChild(option);}
}

