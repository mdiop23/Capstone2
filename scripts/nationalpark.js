"use strict";

// upon page loading, js knows to grab these two dropdowns
window.onload= function(){
  let searchByLocation= document.getElementById("searchByLocation") 
  let searchByParkType= document.getElementById("searchByParkType")

  searchByLocation.onchange= locationDropdownMenu;
}

// attaching locations array to states and adding options to dropdown
function locationDropdownMenu(){
    for(let states of locationsArray){
        let options= new Option(states);
        searchByLocation.appendChild(options)
    }
}