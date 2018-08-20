var tabNames = ['web', 'ml', 'fun'];
var linkTypes = ['red-link', 'yellow-link', 'blue-link'];

function displayTab(tabName) {
    // hide everything
    for(const tag of tabNames) {
        var rows = document.getElementsByClassName(tag);
        for(const row of rows) {
            row.style.display = 'none';
        }
    }

    // only show the row we want
    var rows = document.getElementsByClassName(tabName);
    for(const row of rows) {
        row.style.display = 'block';
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// can't bind onclicks to functions till the page is loaded
window.onload = function() {
    document.getElementById('web-button').onclick = function() {
        displayTab('web');
    }
    document.getElementById('ml-button').onclick = function() {
        displayTab('ml');
    }
    document.getElementById('fun-button').onclick = function() {
        displayTab('fun');
    }

    var links = document.getElementsByClassName('portfolio-link');
    for(const link of links) {
        link.classList.add(linkTypes[getRandomInt(3)]);

        // change the hover color each time the user leaves the link
        link.onmouseleave = function() {
            this.className = '';
            this.classList.add('portfolio-link');
            this.classList.add(linkTypes[getRandomInt(3)])
        }
    }
}
