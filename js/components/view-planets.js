/**
 * Created by Becca on 12/09/2017.
 */

var viewPlanets = new Vue({
    el: '#view-planets',
    data: {
        message: "Plateau jeu 1",
		planets: []
    },
    methods: {
        refresh: function() {
            var self = this;
            self.planets = []
            PlanetDao.getAllPlanets()
                .then(function (r) {
                    self.planets = r.data;
                })
        },
		
		refreshResources: function () {
			console.log("resources")
			var self = this;
			for (var p of this.planets) {
				PlanetDao.getPlanetResources(p.id).then(function (r) {
					p.availableGold = r.data.availableGold;
					p.availableIron = r.data.availableIron;
					p.availablePlutonium = r.data.availablePlutonium;
				});
			}
		}
			
    },
	mounted: function () {
		this.refresh();
		//setInterval(this.refreshResources, 5000);
	}
})
