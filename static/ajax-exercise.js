"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(result) {

    // TODO: get the fortune and show it in the #fortune-text div
    var fortune = result;
    $('#fortune-text').html(fortune);
}

function getFortune() {
    $.get('/fortune', showFortune);
}
$('#get-fortune-button').on('click', getFortune);


// PART 2: SHOW WEATHER

function showWeather(result) {
    
    var weather = result;

    // debugger
    $('#weather-info').html(weather['forecast']);
    console.log(weather['forecast']);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

function getForecast(evt) {
    evt.preventDefault();
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, showWeather);
}

$("#weather-form").on('submit', getForecast);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


