// Write your helper functions here!

require('cross-fetch/polyfill'); 

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus"); 
    let copilotStatus = document.getElementById("copilotStatus"); 
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus"); 
    let faultyItems = document.getElementById("faultyItems"); 
    
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!"); 
    } 
    else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter numbers for Fuel Level and Cargo Mass");
    } 
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please enter letters for Pilot and CoPilot names.");
    }   
    else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`; 
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
    }

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible"; 
        fuelStatus.innerHTML = "Fuel level too low for launch"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
        launchStatus.style.color = "red"; 

    } 
    else if (cargoLevel > 10000) {
        faultyItems.style.visibility = "visible"; 
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"; 
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"; 
        launchStatus.style.color = "red"; 

    } 
    else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.style.color = "green"; 
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    }
};
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;