/**
 * Created by Becca on 12/09/2017.
 */

const wsUrl = 'http://localhost:8080/api/'

var PlanetDao = {
    getAllPlanets: function () {
        return axios.get(wsUrl + 'planets')
    }
}