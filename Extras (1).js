document.addEventListener("DOMContentLoaded", function() {
    // Hide all personality texts initially
    hideAllPersonalityTexts();

    // Find all personality images
    const personalityImages = document.querySelectorAll('.PersonalityImage img');

    // Add click event listener to each image
    personalityImages.forEach(image => {
        image.addEventListener('click', function() {
            // Get the text associated with the clicked image
            const personalityText = this.parentNode.nextElementSibling;
            
            // Hide all personality texts
            hideAllPersonalityTexts();

            // Replace the Text01 with the personality text
            const text01 = document.querySelector('.Text01');
            text01.textContent = personalityText.textContent;

            // Adjust position of the replaced text
            adjustPersonalityTextPosition(text01);

            // Hide the RightImage element
            document.getElementById('RightImage').style.display = 'none';

            // Move elements to the left
            document.body.classList.add('moved-left');

            // Get the source of the clicked image
            const imgSrc = this.src;

            // Update the image on the right (RightImage container)
            const rightImageContainer = document.getElementById('RightImage');
            rightImageContainer.innerHTML = ''; // Clear existing content
            const newRightImg = document.createElement('img');
            newRightImg.src = imgSrc;
            rightImageContainer.appendChild(newRightImg);
            rightImageContainer.style.display = 'block';

            // Show the Select image
            document.getElementById('Select').style.display = 'inline-block';
        });
    });
});

// Function to adjust the position of the replaced Text01 element
function adjustPersonalityTextPosition(personalityText) {
    // Modify CSS properties with transition for smooth movement
    personalityText.style.transition = 'left 0.3s ease'; // Add transition for smooth movement
    personalityText.style.left = '27%'; // Adjust left position as needed
}

// Function to hide all personality text elements
function hideAllPersonalityTexts() {
    const personalityTexts = document.querySelectorAll('.PersonalityText');
    personalityTexts.forEach(text => {
        text.style.display = 'none';
    });
}
