"use scrict";

/* Assigning two ids for two different elements only displays the contents for the first and returns undefined for the
second id assigned the id*/
$(document).ready(function () {
// var contents = $('#welcome').html();
// alert(contents);
//
// var whoYou = $('#what-we-bout').html();
// alert(whoYou);
//
// $(document).ready(function () {
//     alert('The DOM has finished loading!');
// })

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
//
// var welcome = $('#welcome').html();
// alert(welcome);
//
// var whoWeAre = $('#what-we-bout').html();
// alert(whoWeAre);
//
// var featuredNums = $('#elvish-bread').html();
// alert('Here is our featured item for tonight: ' + featuredNums);
//
// $('#welcome, #what-we-bout, .menu-item').css('background', 'yellow');

// Mouse Events

$('h1').click(
    function () {
        $(this).css('background-color', 'green')
    });

$('p').dblclick(
    function () {
        $(this).css('font-size', '18px');
    });

$('li').hover(
    function () {
        $(this).css('color', 'red');
    },
    function () {
        $(this).css('color', 'black');
    });


});