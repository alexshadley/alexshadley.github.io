"use strict";

var buttonTypes = ['blue-button', 'yellow-button', 'red-button'];

function getRandomButtonType() {
    var selection = getRandomInt(buttonTypes.length);
    return buttonTypes[selection];
}

window.onload = function() {
    var buttons = document.getElementsByClassName('button');
    console.log(buttons.length)
    // Its a goddam collection, why would I not be able to iterate
    // with for of?  Why Edge???
    for(var i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        console.log('test');
        button.classList.add(getRandomButtonType());

        button.addEventListener('mouseleave', function(event) {
            this.className = '';
            this.classList.add('button');
            this.classList.add(getRandomButtonType());
        });
    }
}