var tabNames = ['web', 'ml', 'fun'];
var buttonNames = ['web-button', 'ml-button', 'fun-button']
var linkTypes = ['red-link', 'yellow-link', 'blue-link'];

function startNavAnimation(callingTab) {
    var margin = 200;
    var velocity = 0.0;
    var acceleration = .03;
    var id = setInterval(frame, 3);
    function frame(){
        if(margin > 100)
        {
            velocity += acceleration;
        }
        else
        {
            velocity -= acceleration;
        }
        
        margin -= velocity;
        document.getElementById('nav').style.marginTop = margin;

        // exit condition
        if(velocity < 0.0 || margin <= 0){
            clearInterval(id);
            document.getElementById('nav').style.marginTop = 0;
            initNav();
            displayTab(callingTab);
        }
    }
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

    for(const button of buttonNames){
        document.getElementById(button).style.borderBottomStyle = 'solid';
    }
}

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

    // set all borders to black
    for(const button of buttonNames) {
        document.getElementById(button).style.borderBottomColor = '#373737';
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

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
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

    // start with no tab
    displayTab('none');
}
