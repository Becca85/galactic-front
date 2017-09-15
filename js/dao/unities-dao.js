/**
 * Created by Becca on 13/09/2017.
 */

if (!wsUrl) {
    var wsUrl = 'http://localhost:8080/api/'
}

var UnitiesDao = {
    getUnitiesTypes: function () {
        return axios.get(wsUrl + 'unities/types')
    },
    createUnity:function (planetId, unityType) {

        return axios.put(wsUrl + 'planets/' + planetId +'/unities',
            {
                unityType: unityType
            })

    },
    getUnitiesPlanet: function (planetId) {
        return axios.get(wsUrl + 'planets/' + planetId +'/unities')

    }
}