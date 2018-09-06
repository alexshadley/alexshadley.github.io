buttonTypes = ['blue-button', 'yellow-button', 'red-button'];

function getRandomButtonType() {
    var selection = getRandomInt(buttonTypes.length);
    return buttonTypes[selection];
}

window.onload = function() {
    var buttons = document.getElementsByClassName('button');
    for(const button of buttons) {
        button.classList.add(getRandomButtonType());

        button.addEventListener('mouseleave', function(event) {
            this.className = '';
            this.classList.add('button');
            this.classList.add(getRandomButtonType());
        });
    }
}