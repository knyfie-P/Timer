// Define a function named checkWidthAndRemoveElement
function checkWidthAndRemoveElement() {
    // Get the current width of the browser window
    var screenWidth = window.innerWidth;

    // Get a reference to the element with the ID 'elementToRemove'
    var elementToRemove = document.getElementById('elementToRemove');

    // Check if the screen width is less than 768 pixels (adjust this value as needed for your breakpoint)
    if (screenWidth < 768) {
        // If the element exists and the screen width is less than 768 pixels
        if (elementToRemove) {
            // Remove the element from the DOM by removing it from its parent node
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
    }
}

// Call the checkWidthAndRemoveElement function initially to remove the element if necessary
checkWidthAndRemoveElement();

// Attach the checkWidthAndRemoveElement function to the resize event of the window
// This allows the function to be called whenever the window is resized
window.addEventListener('resize', checkWidthAndRemoveElement);
