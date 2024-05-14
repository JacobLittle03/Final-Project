/*
    Student Name: Jacob Little
    File Name: script.js
    Date: 4/19/2024
*/

//Hamburger menu function
function hamburger () {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    }
    else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

function scaleVideoContainer() {
    var navbarHeight = $('.navbar-fixed-top').height() + 'px',
        height = $(window).height(),
        unitHeight = parseInt(height) + 'px';

    $('.homepage-hero-module').css({
      'margin-top': navbarHeight,
      'height': unitHeight
    });  
}