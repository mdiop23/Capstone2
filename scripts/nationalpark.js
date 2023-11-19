// "use strict";

// // upon page loading, js knows to grab these two dropdowns
// const parksContainer = document.getElementById("parksContainer")
// const searchByLocation = document.getElementById("searchByLocation");
// const searchByParkType = document.getElementById("searchByParkType");

// window.onload = init;

// function init() {
//      searchByLocation.onchange = displaySearchByLocation;
//      searchByParkType.onchange = displaySearchByParkType;
//  };

// function displaySearchByLocation() {

//     for (let location of locationsArray) {
//         let option = document.createElement("option");
//         option.value = location;
//         option.innerText = location;
//         searchByLocation.appendChild(option);
//     }
// };

// function displaySearchByParkType() {

//     for (let typeOfPark of parkTypesArray) {
//         let option = document.createElement("option");
//         option.value = typeOfPark;
//         option.innerText = typeOfPark;
//         searchByParkType.appendChild(option);
//     }
// };

// function dropdownSelection() {
//     let locationSelectedValue;
//     let parkTypeSelectionValue;

//     if (searchByLocation.value !== "") {
//         locationSelectedValue = searchByLocation.value;
//         let parkByStateList = findParksUsingStates(locationSelectedValue);
//         addLocationToContainer(parkByStateList);
//     } else if (searchByParkType.value !== "") {
//         parkTypeSelectionValue = searchByParkType.value;
//         let parkTypeList = findParksUsingType(parkTypeSelectionValue);
//         addLocationToContainer(parkTypeList);
//     }
// }

// function findParksUsingStates (location) {
//     return nationalParksArray.filter(park => park.State == location);
// };

// function findParksUsingType (parkType) {
//     return nationalParksArray.filter(park => park.LocationName.includes(parkType));
// };

// // when state is selected, this function will print the location info in a container aka the accordion
// function addLocationToContainer(parkByStateList){
// parkByStateList.forEach(state => {
//     let accordionItemDiv = document.createElement("div");
//     accordionItemDiv.className = "accordion-item";

//     parksContainer.appendChild(accordionItemDiv);

//     let accordionHeader = document.createElement("h2");
//     accordionHeader.className = "accordion-header";

//     accordionItemDiv.appendChild(accordionHeader);

//     let btn = document.createElement("button");
//     btn.className = "accordion-button collapsed";
//     btn.type = "button";
//     btn.setAttribute("data-bs-toggle", "collapse");

//     let targetId = "flush-collapse-" + state.LocationID;

//     btn.setAttribute("data-bs-target", "#" + targetId);
//     btn.setAttribute("aria-expanded", "false");
//     btn.setAttribute("aria-controls", targetId);

//     let btnTextNode = document.createTextNode(state.LocationName);
//     btn.appendChild(btnTextNode);

//     accordionHeader.appendChild(btn);

//     let flushCollapseDiv = document.createElement("div");
//     flushCollapseDiv.id = targetId;
//     flushCollapseDiv.className = "accordion-collapse collapse";
//     flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

//     let accordionBody = document.createElement("div");
//     accordionBody.className = "accordion-body";

//     let accordionBodyHTML = `
//             <p><strong>Location ID:</strong> ${state.LocationID}</p>
//             <p><strong>Location Name:</strong> ${state.LocationName}</p>
//             <p><strong>Address:</strong> ${state.Address}</p>
//             <p><strong>City:</strong> ${state.City}</p>
//             <p><strong>State:</strong> ${state.State}</p>
//             <p><strong>Zip Code:</strong> ${state.ZipCode}</p>
//             <p><strong>Phone:</strong> ${state.Phone}</p>
//             <p><strong>Fax:</strong> ${state.Fax}</p>
//             <p><strong>Latitude:</strong> ${state.Latitude}</p>
//             <p><strong>Longitude:</strong> ${state.Longitude}</p>

//     `;

//     accordionBody.innerHTML = accordionBodyHTML

//     flushCollapseDiv.appendChild(accordionBody);

//     accordionItemDiv.appendChild(flushCollapseDiv);
// });

// };


// "use strict";

// const parksContainer = document.getElementById("parksContainer");
// const searchByLocation = document.getElementById("searchByLocation");
// const searchByParkType = document.getElementById("searchByParkType");

// window.onload = init

// function init() {
//     const searchBtn = document.getElementById("searchBtn");
//     searchBtn.onclick = searchBtnClicked;
// };

// // function displaySearchByLocation() {
// //     for (let state of locationsArray) {
// //         let option = document.createElement("option");
// //         option.value = state;
// //         option.innerText = state;
// //         searchByLocation.appendChild(option);
// //     }
// // };

// function populateSearchByLocation() {

//     let parksArray = getParkInfoArray();

//     for (let park of parksArray) {
//         let newOption = new Option(park.State);
//         locationDropdown.appendChild(newOption);
//     }

// };

// function displaySearchByParkType() {
//     for (let parkType of parkTypesArray) {
//         let option = document.createElement("option");
//         option.value = parkType;
//         option.innerText = parkType;
//         searchByParkType.appendChild(option);

//     }

// };

// // this function grabs the info from nationalParkArray and loops through them using a for..of loop
// function getParkInfoArray() {

//     let locationInfo = [];
//     for (let parkInfo of nationalParksArray) {
//         if (locationInfo.includes(parkInfo.State) != true) {
//             locationInfo.push(parkInfo.State);
//         }
//     }

//     locationInfo.sort();

//     // I changed it from return locationInfo to nationalParksArray so that it would
//     //return all parks and not just unique states.
//     return nationalParksArray;
// };

// function getParkTypeData() {
//     let uniqueParkTypes = [];

//     for (let type of parkTypesArray) {
//         if (!uniqueParkTypes.includes(type)) {
//             uniqueParkTypes.push(type);
//         }
//     }

//     uniqueParkTypes.sort();

//     return parkTypesArray;
// };


// function searchBtnClicked() {
//     parksContainer.innerHTML = "";
//     let locationSelected = searchByLocation.value;
//     let parkTypeSelected = searchByParkType.value;
//     if (locationSelected) {
//         let locationInfo = nationalParksArray.filter(park => park.State == locationSelected)
//         for (let park of locationInfo) {
//             displayParksContainer(park);

//         }
//     }
//     if (parkTypeSelected) {
//         for (let park of nationalParksArray) {
//             if (park.LocationName.includes(parkTypeSelected)) {
//                 displayParksContainer(park, parkTypeSelected);
//             }
//         }
//     }

// };


// function displayParksContainer(location) {

//     let accordionItemDiv = document.createElement("div");
//     accordionItemDiv.className = "accordion-item";

//     parksContainer.appendChild(accordionItemDiv);

//     let accordionHeader = document.createElement("h2");
//     accordionHeader.className = "accordion-header";

//     accordionItemDiv.appendChild(accordionHeader);

//     let btn = document.createElement("button");
//     btn.className = "accordion-button collapsed";
//     btn.type = "button";
//     btn.setAttribute("data-bs-toggle", "collapse");

//     let targetId = "flush-collapse-" + location.LocationID;

//     btn.setAttribute("data-bs-target", "#" + targetId);
//     btn.setAttribute("aria-expanded", "false");
//     btn.setAttribute("aria-controls", targetId);

//     let btnTextNode = document.createTextNode(location.LocationName);
//     btn.appendChild(btnTextNode);

//     accordionHeader.appendChild(btn);

//     let flushCollapseDiv = document.createElement("div");
//     flushCollapseDiv.id = targetId;
//     flushCollapseDiv.className = "accordion-collapse collapse"
//     flushCollapseDiv.setAttribute("data-bs-parent", "#parksContainer");

//     let accordionBody = document.createElement("div");
//     accordionBody.className = "accordion-body";

//     let accordionBodyHTML = `
//         <p><strong>Location ID:</strong> ${location.LocationID}</p>
//         <p><strong>Location Name:</strong> ${location.LocationName}</p>
//         <p><strong>Address:</strong> ${location.Address}</p>
//         <p><strong>City:</strong> ${location.City}</p>
//         <p><strong>State:</strong> ${location.State}</p>
//         <p><strong>Zip Code:</strong> ${location.ZipCode}</p>
//         <p><strong>Phone:</strong> ${location.Phone}</p>
//         <p><strong>Fax:</strong> ${location.Fax}</p>
//         <p><strong>Latitude:</strong> ${location.Latitude}</p>
//         <p><strong>Longitude:</strong> ${location.Longitude}</p>
//     `;

//     accordionBody.innerHTML = accordionBodyHTML;

//     flushCollapseDiv.appendChild(accordionBody);

//     accordionItemDiv.appendChild(flushCollapseDiv);
// };

"use strict";

const parksContainer = document.getElementById("parksContainer");
const searchByLocationRadioBtn = document.getElementById("searchByLocationRadioBtn");
const searchByParkTypeRadioBtn = document.getElementById("searchByParkTypeRadioBtn");
const searchByLocation = document.getElementById("searchByLocation");
const searchByParkType = document.getElementById("searchByParkType");

window.onload = init;

function init() {
    searchByLocationRadioBtn.onclick = handleRadioClicked;
    parkTypeRadioBtn.onclick = handleRadioClicked;
    searchByLocation.onchange = dropdownSelection;
    searchByParkType.onchange = dropdownSelection;
};

function handleRadioClicked() {
    clearContainer();

    if (locationRadioBtn.checked) {
        showLocationDropdown();
    }
    else if (parkTypeRadioBtn.checked) {
        showParkTypeDropdown();
    }
};

function showLocationDropdown() {
    locationDropdown.style.display = "block";
    parkTypeDropdown.style.display = "none";

    let defaultOption = document.getElementById("defaultLocationOption");
    defaultOption.innerText = "Select a state";

    for (let state of locationsArray) {
        let option = document.createElement("option");
        option.value = state;
        option.innerText = state;
        locationDropdown.appendChild(option);
    }
    locationDropdown.value = "";
};

function showParkTypeDropdown() {
    parkTypeDropdown.style.display = "block";
    locationDropdown.style.display = "none";

    let defaultOption = document.getElementById("defaultTypeOption");
    defaultOption.innerText = "Select a type of park";
    
    for (let parkType of parkTypesArray) {
        let option = document.createElement("option");
        option.value = parkType;
        option.innerText = parkType;
        parkTypeDropdown.appendChild(option);
    }
    parkTypeDropdown.value = "";
};

function dropdownSelection() {
    clearContainer();

    if (locationRadioBtn.checked) {
        let stateSelection = locationDropdown.value;
        let parksList = filterParksByState(stateSelection);
        parkInfoByStateContainer(parksList);
    }
    else if (parkTypeRadioBtn.checked) {
        let parkTypeSelection = parkTypeDropdown.value;
        let typeList = filterParksByType(parkTypeSelection);
        parkInfoByTypeContainer(typeList);
    }
};

function filterParksByState(state) {
    return nationalParksArray.filter(natPark => natPark.State == state);
};

function filterParksByType(type) {
    return nationalParksArray.filter(natPark => natPark.LocationName.includes(type));
};

function parkInfoByStateContainer(parksList) {
    parksList.forEach(park => {
        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        parkContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + park.LocationID;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(park.LocationName);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let visitLink = '';

        // if (park.Visit) {
        //     visitLink = '<a href="' + park.Visit + '" target="_blank" class="btn btn-dark">Visit Park</a>';
        // }

        // if (park.Visit) {
        //     visitLink = <a href="${park.Visit}" target="_blank" class="btn btn-dark">Visit Park </a>;
        // }

        let accordionBodyHTML = `
            <p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> <a href=""> ${park.Visit}</a></p>
        `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);
    });
};

function parkInfoByTypeContainer(typeList) {
    typeList.forEach(park => {
        let accordionItemDiv = document.createElement("div");
        accordionItemDiv.className = "accordion-item";

        parkContainer.appendChild(accordionItemDiv);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        accordionItemDiv.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + park.LocationID;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(park.LocationName);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

        let accordionBody = document.createElement("div");
        accordionBody.className = "accordion-body";

        let accordionBodyHTML = `
            <p><strong>Location ID:</strong> ${park.LocationID}</p>
            <p><strong>Location Name:</strong> ${park.LocationName}</p>
            <p><strong>Address:</strong> ${park.Address}</p>
            <p><strong>City:</strong> ${park.City}</p>
            <p><strong>State:</strong> ${park.State}</p>
            <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
            <p><strong>Phone:</strong> ${park.Phone}</p>
            <p><strong>Fax:</strong> ${park.Fax}</p>
            <p><strong>Latitude:</strong> ${park.Latitude}</p>
            <p><strong>Longitude:</strong> ${park.Longitude}</p>
            <p><strong>Visit:</strong> <a href=""> ${park.Visit}</a></p>
        `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        accordionItemDiv.appendChild(flushCollapseDiv);
    });
};

function clearContainer() {
    parkContainer.innerHTML = "";
};