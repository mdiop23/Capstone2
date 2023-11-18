"use strict";

// upon page loading, js knows to grab these two dropdowns
const parksContainer = document.getElementById("parksContainer")
const searchByLocation = document.getElementById("searchByLocation");
const searchByParkType = document.getElementById("searchByParkType");

// window.onload = function (){
//     searchByLocation.onchange = locationDropdownMenu;
//     console.log("Window onload event fired")
// }
window.onload = locationDropdownMenu;

// attaching locations array to states and adding options to dropdown

function locationDropdownMenu() {
    //let defaultLocationOption = new Option("Select One", "");
    //searchByLocation.appendChild(defaultLocationOption);
    for (let location of locationsArray) {
        let option = document.createElement("option");
        option.value = location;
        option.innerText = location;
        searchByLocation.appendChild(option);}
};

// looping through park info to find which parks fall under the selected state
function locationDropdownSelection() {
    let locationInfo= [];
    for (let parkInfo of nationalParksArray) {
        if (locationInfo.includes(parkInfo.State) != true) {
            locationInfo.push(parkInfo.State);
        }
    }
    locationInfo.sort();

    // I changed it from return locationInfo to nationalParksArray so that it would
    //return all parks and not just unique states.
    return nationalParksArray;
}

// when state is selected, this function will print the location info in a container aka the accordion
function addLocationToContainer(state){
    let accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    parksContainer.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + state.LocationID;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(state.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse";
    flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
            <p><strong>Location ID:</strong> ${state.LocationID}</p>
            <p><strong>Location Name:</strong> ${state.LocationName}</p>
            <p><strong>Address:</strong> ${state.Address}</p>
            <p><strong>City:</strong> ${state.City}</p>
            <p><strong>State:</strong> ${state.State}</p>
            <p><strong>Zip Code:</strong> ${state.ZipCode}</p>
            <p><strong>Phone:</strong> ${state.Phone}</p>
            <p><strong>Fax:</strong> ${state.Fax}</p>
            <p><strong>Latitude:</strong> ${state.Latitude}</p>
            <p><strong>Longitude:</strong> ${state.Longitude}</p>

    `;

    accordionBody.innerHTML = accordionBodyHTML

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);

}
