"use strict";

var tabNames = ['web', 'ml', 'fun'];
var buttonNames = ['web-button', 'ml-button', 'fun-button']
var linkTypes = ['red-link', 'yellow-link', 'blue-link'];

function startNavAnimation(callingTab) {
    document.getElementById('nav').classList.add('up');

    document.getElementById('nav').addEventListener("transitionend", function(event) {
        if(event.propertyName == 'margin-top') {
            initNav();
            displayTab(callingTab);
        }
    });
}

function initNav() {
    document.getElementById('web-button').onclick = function() {
        displayTab('web');
    }
    document.getElementById('ml-button').onclick = function() {
        displayTab('ml');
    }
    document.getElementById('fun-button').onclick = function() {
        displayTab('fun');
    }

    for(var i = 0; i < buttonNames.length; i++){
        document.getElementById(buttonNames[i]).style.borderBottomStyle = 'solid';
    }
}

function displayTab(tabName) {
    // hide everything
    for(var i = 0; i < tabNames.length; i++) {
        var rows = document.getElementsByClassName(tabNames[i]);
        for(var j = 0; j < rows.length; j++) {
            rows[j].style.display = 'none';
        }
    }

    // only show the row we want
    var rows = document.getElementsByClassName(tabName);
    for(var i = 0; i < rows.length; i++) {
        rows[i].style.display = 'block';
    }

    // set all borders to black
    for(var i = 0; i < buttonNames.length; i++) {
        document.getElementById(buttonNames[i]).style.borderBottomColor = '#373737';
    }

    // set the selected tab underline color
    if(tabName == 'web'){
        document.getElementById('web-button').style.borderBottomColor = '#fc4a1a';
    }
    if(tabName == 'ml'){
        document.getElementById('ml-button').style.borderBottomColor = '#f7b733';
    }
    if(tabName == 'fun'){
        document.getElementById('fun-button').style.borderBottomColor = '#4abdac';
    }
}

// can't bind onclicks to functions till the page is loaded
window.onload = function() {
    document.getElementById('web-button').onclick = function() {
        startNavAnimation('web');
    }
    document.getElementById('ml-button').onclick = function() {
        startNavAnimation('ml');
    }
    document.getElementById('fun-button').onclick = function() {
        startNavAnimation('fun');
    }

    // start with no tab
    displayTab('none');
}
