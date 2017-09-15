/**
 * Created by Becca on 12/09/2017.
 */

if (!wsUrl) {
    var wsUrl = 'http://localhost:8080/api/'
}

var PlanetDao = {
    getAllPlanets: function () {
        return axios.get(wsUrl + 'planets')
    },
	
	getPlanetResources: function(planetId) {
		return axios.get(wsUrl + 'planets/' + planetId + '/resources');
	}
}