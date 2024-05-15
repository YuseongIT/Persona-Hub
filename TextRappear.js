// Function to handle mouse enter to show the overlay
function handleMouseEnter(event) {
    var boxLink = event.currentTarget.querySelector(".box-link");
    boxLink.style.opacity = 1;
}

// Function to handle mouse leave from the container and hide the overlay
function handleMouseLeave(event) {
    var boxLink = event.currentTarget.querySelector(".box-link");
    boxLink.style.opacity = 0;
}