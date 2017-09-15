/**
 * Created by Becca on 13/09/2017.
 */



var createUnity = new Vue({
    el: '#create-unity',
    data: {
        differences: {},
        selected: {
            type: null,
            planet: null
        },
        types : [],
        planets: [],


    },
    mounted : function () {
        var self = this

        UnitiesDao.getUnitiesTypes()
            .then(function (r) {
                self.types = r.data
            })
        PlanetDao.getAllPlanets()
            .then(function (r) {
                self.planets = r.data;
            })
    },


       methods: {
           create: function () {
               UnitiesDao.createUnity(this.selected.planet.id, this.selected.type.unityType)
                   .then(function (r) {
                       alert("unité créer")

                   })
                   .catch(function (r) {
                       alert("Erreur : l'unité n'a pas été créée")
                   })
           },

           /*Fighter.class, Cruiser.class, Scout.class, Transporter.class*/
           buildIsPossible: function () {
               var possible = true;
               if (this.selected.type.orbital) {
                   possible = possible && (this.selected.planet.orbitalFreeSpace > this.selected.type.size);
               } else {
                   possible = possible && (this.selected.planet.groundFreeSpace > this.selected.type.size);
               }

               possible = possible && (
                   this.selected.planet.availableIron > this.selected.type.ironCost &&
                   this.selected.planet.availablePlutonium > this.selected.type.plutoniumCost &&
                   this.selected.planet.availableGold > this.selected.type.goldCost)

               return possible;
           },

           formatDelay: function (delay) {
               var jours = Math.round(delay / 86400)
               var heures = Math.round((delay % 86400) / 3600)
               var minutes = Math.round((delay % 3600) / 60)
               var secondes = Math.round((delay % 3600)% 60)

               var zerofill = function (n) {
                   return (n < 9) ? "0" + n : n;
               }

               return zerofill(jours) + " jour(s), " + zerofill(heures) + " heure(s), " + zerofill(minutes) + " minute(s) et " + zerofill(secondes)
           },

           updateDifferences: function () {
               if (!this.selected.type || !this.selected.planet) {
                   return;
               }

               if (!this.selected.type.orbital) {
                   var place = "Place restantes sur terre : " + (this.selected.planet.groundFreeSpace - this.selected.type.size)
               }
               else {
                   var place = "Place restantes en orbite : " + (this.selected.planet.orbitalFreeSpace - this.selected.type.size)
               }
               var diffF =  "Ressources restantes en fer : " + (this.selected.planet.availableIron - this.selected.type.ironCost)
               var diffP = "Ressources restantes en fer : " + (this.selected.planet.availablePlutonium - this.selected.type.plutoniumCost)
               var diffO = "Ressources restantes en fer : " + (this.selected.planet.availableGold - this.selected.type.goldCost)

               this.differences = {
                   place: place,
                   diffF: diffF,
                   diffP: diffP,
                   diffO: diffO
               }
           }

       }

})