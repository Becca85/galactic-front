/**
 * Created by Becca on 15/09/2017.
 */

$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})