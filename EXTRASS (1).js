document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all personality text elements
    function hideAllPersonalityTexts() {
        const personalityTexts = document.querySelectorAll('.PersonalityText');
        personalityTexts.forEach(text => {
            text.style.display = 'none';
        });
    }

    // Function to adjust personality text position
    function adjustPersonalityTextPosition(personalityText) {
        personalityText.style.transition = 'left 0.3s ease';
        personalityText.style.left = '27%';
    }

    hideAllPersonalityTexts(); // Hide all personality texts initially

    const personalityImages = document.querySelectorAll('.PersonalityImage img');

    let selectedImageSrc = ''; // Variable to store the selected image source

    // Add click event listener to each personality image
    personalityImages.forEach(image => {
        image.addEventListener('click', function() {
            // Store the clicked image source
            selectedImageSrc = this.src;

            const personalityText = this.parentNode.nextElementSibling;

            hideAllPersonalityTexts(); // Hide all personality texts

            const text01 = document.querySelector('.Text01');
            text01.textContent = personalityText.textContent;

            adjustPersonalityTextPosition(text01); // Adjust personality text position

            document.getElementById('RightImage').style.display = 'none';

            document.body.classList.add('moved-left');

            const rightImageContainer = document.getElementById('RightImage');
            rightImageContainer.innerHTML = '';
            const newRightImg = document.createElement('img');
            newRightImg.src = selectedImageSrc; // Set the source of the right image container
            rightImageContainer.appendChild(newRightImg);
            rightImageContainer.style.display = 'block';

            document.getElementById('Select').style.display = 'inline-block';
        });
    });

    // Add click event listener to the Select button
    document.getElementById('Select').addEventListener('click', function() {
        // Navigate to PersonaHub.html with selected image source as a query parameter
        window.location.href = `PersonaHub.html?imageSrc=${encodeURIComponent(selectedImageSrc)}`;
    });
});

// Inside the click event listener for the Select button
document.getElementById('Select').addEventListener('click', function() {
    // Navigate to Concl.html with the selected image source as a query parameter
    window.location.href = `Concl.html?selectedImage=${encodeURIComponent(selectedImageSrc)}`;
});
