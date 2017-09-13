/**
 * Created by Becca on 12/09/2017.
 */

var viewUnities = new Vue({
    el: '#view-unities',
    data: {
        message: "unité de la planètes : ",
        unities: [
            {type: "orbital", name: "croiseur", level: 1, size:2, health: 400, attack: 300, isBuilding:"true", productDelay: 0,
                ironCost: 30, plutoniumCost: 10, goldCost: 100, speed:20, position: 34, goPlanet: 56, idPlanet: 18 , departureTime: 1300, isTravelling: 1700},
            {type: "terrestre", name: "Hangar à Fer", level: 1, size:2, health: 100, attack: "null", isBuilding:"true", productDelay: 0,
                ironCost: 5, plutoniumCost: 3, goldCost: 4, speed: "null", position: 33, goPlanet: "null", idPlanet: "null" , departureTime: "null", isTravelling: "null"},
            {type: "orbital", name: "Tourelles de missiles", level: 1, size:2, health: 500, attack: 200, isBuilding:"false", productDelay: 405,
                ironCost: 2, plutoniumCost: 5, goldCost: 4, speed:"null", position: 42, goPlanet: "null", idPlanet: "null" , departureTime: "null", isTravelling: "null"},
        ]
    }
})