// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

//resubbing file for autograder on github 

window.addEventListener("load", function() {
    let button = document.getElementById("formSubmit");
    button.addEventListener("click", function() {
        let document = window.document; 
        let pilot = document.querySelector("input[name=pilotName]");  
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems"); 

        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value); 

        event.preventDefault(); 
        });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch(); 
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        console.log(chosenPlanet); 
        console.log(chosenPlanet.name); 
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
    })

 });