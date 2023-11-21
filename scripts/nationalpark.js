"use strict";

window.onload = init;

//declaring global variables for the main aspects of page functionality
const parksContainer = document.getElementById("parksContainer");
const searchByLocation = document.getElementById("searchByLocation");
const searchByParkType = document.getElementById("searchByParkType");

// preparing all aspects, getting the button from html, setting action listener, and populating the two dropdowns
function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = searchBtnClicked;
    populateLocationDropdown();
    populateParkTypeDropdown();
}

// looping thru location array, making new option and adding that to searchbylo dropdown
function populateLocationDropdown() {
    for (let location of locationsArray) {
        let newOption = new Option(location, location);
        searchByLocation.appendChild(newOption);
    }
}

//looping though park type array, making new option and adding that to searchbypark dropdown
function populateParkTypeDropdown() {
    for (let parkType of parkTypesArray) {
        let newOption = new Option(parkType, parkType);
        searchByParkType.appendChild(newOption);
    }
}

// pulling info for selected option from locations array and displaying it in dynamic accordion
function addLocationToContainer(location) {
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

    let targetId = "flush-collapse-" + location.LocationID;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(location.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${location.LocationID}</p>
        <p><strong>Location Name:</strong> ${location.LocationName}</p>
        <p><strong>Address:</strong> ${location.Address}</p>
        <p><strong>City:</strong> ${location.City}</p>
        <p><strong>State:</strong> ${location.State}</p>
        <p><strong>Zip Code:</strong> ${location.ZipCode}</p>
        <p><strong>Phone:</strong> ${location.Phone}</p>
        <p><strong>Fax:</strong> ${location.Fax}</p>
        <p><strong>Latitude:</strong> ${location.Latitude}</p>
        <p><strong>Longitude:</strong> ${location.Longitude}</p>
    `;

    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);
}


// // pulling info for selected option from park type array and displaying it in dynamic accordion
function addParkTypeToContainer(type) {
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

    let targetId = "flush-collapse-" + type.LocationID;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(type.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${type.LocationID}</p>
        <p><strong>Location Name:</strong> ${type.LocationName}</p>
        <p><strong>Address:</strong> ${type.Address}</p>
        <p><strong>City:</strong> ${type.City}</p>
        <p><strong>State:</strong> ${type.State}</p>
        <p><strong>Zip Code:</strong> ${type.ZipCode}</p>
        <p><strong>Phone:</strong> ${type.Phone}</p>
        <p><strong>Fax:</strong> ${type.Fax}</p>
        <p><strong>Latitude:</strong> ${type.Latitude}</p>
        <p><strong>Longitude:</strong> ${type.Longitude}</p>
    `;

    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);
}


// action listener for what to do when button is clicked aka display corresponding info to selected values via an accordion
function searchBtnClicked() {
    parksContainer.innerHTML = "";

    let selectedLocation = searchByLocation.value;
    let selectedParkType = searchByParkType.value;

    if (selectedLocation) {
        // Search by location
        let parksInLocation = nationalParksArray.filter(park => park.State.includes(selectedLocation));

        for (let park of parksInLocation) {
            addLocationToContainer(park);
        }
    }

    if (selectedParkType) {
        // Search by park type
        let parksOfType = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType));

        for (let park of parksOfType) {
            addParkTypeToContainer(park);
        }
    }
}

