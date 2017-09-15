

var viewUnities = new Vue({
    el: '#view-unities',
    data: {
        selected: {

            planet: null
        },
		
		remaining: {},

        planets: [],
        unities:[],

        message: "unité de la planètes : "
    },

    methods: {
        refresh: function () {
            var self = this;
            self.unities = []
            UnitiesDao.getUnitiesPlanet(this.selected.planet.id)
                .then(function (r) {
                    self.unities = r.data;
				
					for (var u of self.unities) {
						if (u.remainingTime < 0) {
							self.remaining[u.id] = -u.remainingTime;
						}		
					}
                })
                .catch(function (r) {
                    alert("Erreur : L'affichage des unités de cette planète n'est pas possible")
                })
        },
		
		timerTick: function () {
			var self = this;
			console.log(self.remaining)
			for(var r in self.remaining) {
				if(self.remaining.hasOwnProperty(r))
					self.remaining[r]--;
			}
			
			//setTimeout(this.timerTick, 1000);
		},
		
		formatDelay: function (delay) {
               var jours = Math.round(delay / 86400)
               var heures = Math.round((delay % 86400) / 3600)
               var minutes = Math.round((delay % 3600) / 60)
               var secondes = Math.round((delay % 3600)% 60)

               var zerofill = function (n) {
                   return (n < 9) ? "0" + n : n;
               }
			   
			   return ((jours > 0) ? zerofill(jours) + "j" : "") +
					((heures > 0) ? zerofill(heures) + "h" : "") +
					((minutes > 0) ? zerofill(minutes) + "m" : "") +
					((secondes > 0) ? zerofill(secondes) + "s" : "")
           }

    },
		
			
    mounted : function () {
        var self = this

        PlanetDao.getAllPlanets()
            .then(function (r) {
                self.planets = r.data;
            })
			
		this.timerTick();
    }
})