/**
 * Created by Becca on 12/09/2017.
 */

var viewPlanets = new Vue({
    el: '#view-planets',
    data: {
        message: "Plateau jeu 1",
        planets: [
            {name: "Pluton", coordX: 4, coordY: 8, owner: "Fabien56", groundFreeSpace: 400, orbitalFreeSpace: 100, availableIron:1500, availablePlutonium: 1300, availableGold: 1700  },
            {name: "Terre", coordX: 5, coordY: 2, owner: "Martin", groundFreeSpace: 300, orbitalFreeSpace: 200, availableIron:1300, availablePlutonium: 1100, availableGold: 1000},
            {name: "Terre", coordX: 3, coordY: 6, owner: "Georges", groundFreeSpace: 700, orbitalFreeSpace: 500, availableIron:1700, availablePlutonium: 2000, availableGold: 2300}
        ]
    },
    methods: {
        refresh: function() {
            var self = this;
            self.planets = []
            PlanetDao.getAllPlanets()
                .then(function (r) {
                    console.log(r.data)
                    self.planets = r.data;
                })
        }
    }
})
