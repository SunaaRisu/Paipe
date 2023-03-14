/*
 *Script for making a existing element to a loading bar
 */ 

var LoadingBar = {};

window.onload = function() {
    LoadingBar.Element = document.getElementById('loadingBar');
}


LoadingBar.start = function() {
    LoadingBar.Element.style.background = 'var(--color-secondary)';
}

LoadingBar.done = function() {
    // LoadingBar.Element.style.background = 'var(--color-secondary)'
}

LoadingBar.setProgress = function() {

}
