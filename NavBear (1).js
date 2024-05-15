// Add code for hiding/showing the navigation bar on scroll
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector(".custom-nav").classList.add("hidden-nav");
    } else {
        // Scrolling up
        document.querySelector(".custom-nav").classList.remove("hidden-nav");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

// Variable to track whether the navigation is open or closed
var isNavOpen = false;

// Function to toggle the side navigation
function toggleNav() {
    console.log("Toggling navigation...");
    if (isNavOpen) {
        closeNav();
    } else {
        openNav();
    }
}

// Add an event listener to the BurgBar to toggle the navigation
var burgBar = document.querySelector(".S1_Menu_img");
if (burgBar) {
    burgBar.addEventListener("click", function() {
        toggleNav();
    });
}

// Function to open the side navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "block";
    isNavOpen = true; // Update the state
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
    isNavOpen = false; // Update the state
}

// Add an event listener to the BurgBar to toggle the navigation
document.querySelector(".S1_Menu_img").addEventListener("click", function() {
    toggleNav();
});