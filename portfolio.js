tabNames = ['web', 'ml', 'fun'];

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
}