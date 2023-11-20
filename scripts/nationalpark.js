"use strict";


window.onload = init;

const parksContainer = document.getElementById("parksContainer");
const searchByLocation = document.getElementById("searchByLocation");
const searchByParkType = document.getElementById("searchByParkType ");

function init() {
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.onclick = searchBtnClicked;
    populateLocationDropdown(locationDropdown);
    populateParkTypeDropdown(parkTypeDropdown);

};



function populateLocationDropdown() {

    let parkInfoArray = getParkInfoArray();

    for (let states of parkInfoArray) {
        let newOption = new Option(states.State);
        locationDropdown.appendChild(newOption);
    }

};


function populateParkTypeDropdown() {

    let parkTypesArray = getParkTypeData();

    for (let parkType of parkTypesArray) {
        let newOption = new Option(parkType);
        parkTypeDropdown.appendChild(newOption);
    }
};

function getParkInfoArray() {

    let locationInfo = [];
    for (let parkInfo of nationalParksArray) {
        if (locationInfo.includes(parkInfo.State) != true) {
            locationInfo.push(parkInfo.State);
        }
    }

    locationInfo.sort();


    return nationalParksArray;
};


function getParkTypeData() {

    let uniqueParkTypes = [];

    for (let type of parkTypesArray) {
        if (!uniqueParkTypes.includes(type)) {
            uniqueParkTypes.push(type);
        }
    }

    uniqueParkTypes.sort();

    return parkTypesArray;
};

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
    flushCollapseDiv.setAttribute("data-bs-parent", "#parkSearchContainer");

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

    // let accordionBodyTextNode = document.createTextNode(`LocationID: ${location.LocationID}, LocationName: ${location.LocationName}, Address: ${location.Address}, City: ${location.City}, State: ${location.State}, ZipCode: ${location.ZipCode}, Phone: ${location.Phone}, Fax: ${location.Fax}, Latitude: ${location.Latitude},  Longitude: ${location.Longitude}`);

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);

};

function searchBtnClicked() {
    parksContainer.innerHTML = "";

    let selectedLocation = locationDropdown.value;
    let selectedParkType = parkTypeDropdown.value;

    if (selectedLocation) {
        // Search by location
        let parksInLocation = nationalParksArray.filter(park => park.State === selectedLocation);

        for (let park of parksInLocation) {
            addLocationToContainer(park);
        }
    }

    if (selectedParkType) {
        // Search by park type in the name (case-sensitive)
        for (let park of nationalParksArray) {
            if (park.LocationName.includes(selectedParkType)) {
                parksContainer(park, selectedParkType);
            }
        }
    }
};