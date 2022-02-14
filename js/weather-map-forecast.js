"use strict";
$('#day0 a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
    $('#day1 a').tab('hide')
    $('#day2 a').tab('hide')
    $('#day3 a').tab('hide')
    $('#day4 a').tab('hide')
});
$('#day1 a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
    $('#day0 a').tab('hide')
    $('#day2 a').tab('hide')
    $('#day3 a').tab('hide')
    $('#day4 a').tab('hide')
});
$('#day2 a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
    $('#day0 a').tab('hide')
    $('#day1 a').tab('hide')
    $('#day3 a').tab('hide')
    $('#day4 a').tab('hide')
});
$('#day3 a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
    $('#day0 a').tab('hide')
    $('#day1 a').tab('hide')
    $('#day2 a').tab('hide')
    $('#day4 a').tab('hide')

});
$('#day4 a').on('click', function (event) {
    event.preventDefault()
    $(this).tab('show')
    $('#day0 a').tab('hide')
    $('#day1 a').tab('hide')
    $('#day2 a').tab('hide')
    $('#day3 a').tab('hide')
})