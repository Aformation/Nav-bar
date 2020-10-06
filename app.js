// classList - shows/gets all classes

// contains - checks classList for specific class

// add - add class

// remove - remove class

// toggle - toggles class
const navToggle = document.getElementsByClassName('nav-toggle');
const links = document.getElementsByClassName('links');

navToggle.addEventListener('click', function(){
    console.log(links.classList);
});