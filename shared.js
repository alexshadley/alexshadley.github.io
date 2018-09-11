"use strict";

var colors = ['#fc4a1a', '#f7b733', '#4abdac'];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// currently unused, may find usage later
function pickColor() {
    selection = getRandomInt(colors.length);
    return colors[selection];
}