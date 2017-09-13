/**
 * Created by Becca on 13/09/2017.
 */

if (!wsUrl) {
    var wsUrl = 'http://localhost:8080/api/'
}

var UnitiesDao = {
    getUnitiesTypes: function () {
        return axios.get(wsUrl + 'unities/types')
    }
}