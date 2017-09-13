/**
 * Created by Becca on 13/09/2017.
 */



var createUnity = new Vue({
    el: '#create-unity',
    data: {
        selected: {
            type: null,
            planet: null
        },
        types : [],
        planets: []

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
    }

})