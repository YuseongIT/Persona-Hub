document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code for displaying the personality image
    document.querySelectorAll('.Personality').forEach(item => {
        item.addEventListener('click', event => {
            // Get the selected image URL
            const imageUrl = event.currentTarget.querySelector('.PersonalityImage img').src;

            // Store the selected image URL in local storage
            localStorage.setItem('selectedImage', imageUrl);

            // Hide all previously selected images
            document.querySelectorAll('.selectedImage').forEach(image => {
                image.style.display = 'none';
            });

            // Display the selected image for the clicked Personality
            const selectedImage = item.querySelector('.selectedImage');
            selectedImage.style.display = 'block';

            // Create an image element
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl; // Set the image source

            // Set fallback image source
            imgElement.onerror = function() {
                // If the selected image URL is not available, use a fallback image
                imgElement.src = 'fallback_image_url.jpg'; // Replace 'fallback_image_url.jpg' with your fallback image URL
            };

            // Append the image element to the selectedImage div
            selectedImage.innerHTML = ''; // Clear any previous content
            selectedImage.appendChild(imgElement);

            // Add event listener to the selected image to navigate to Type.html when clicked
            imgElement.addEventListener('click', function() {
                window.location.href = 'Type.html';
            });

            // Prevent the default link behavior
            event.preventDefault();

            // Display the additional image (Str1.png)
            const additionalImage = document.getElementById('additionalImage');
            additionalImage.style.display = 'block';
            additionalImage.querySelector('img').src = 'Assets/Images/Str1.png';
        });
    });

});
