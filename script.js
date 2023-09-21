// Select necessary elements from the HTML
const darkModeToggle = document.getElementById('darkModeToggle'); // Dark mode toggle button
const body = document.body; // The <body> element
const moonIcon = document.getElementById('moonIcon'); // Moon icon for dark mode
const sunIcon = document.getElementById('sunIcon'); // Sun icon for light mode

// Check if the user's system prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Function to set the initial mode based on system preference
function setInitialMode() {
  // Check if the user's system prefers dark mode
  if (prefersDarkMode) {
    // If dark mode is preferred, add the 'dark-mode' class to the <body>
    body.classList.add('dark-mode');
    // Hide the moon icon and show the sun icon
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    // If dark mode is not preferred, remove the 'dark-mode' class from the <body>
    body.classList.remove('dark-mode');
    // Show the moon icon and hide the sun icon
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

// Add event listener to toggle dark/light mode
darkModeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the <body> when the button is clicked
  body.classList.toggle('dark-mode');
  // Update the icon display based on the current mode
  if (body.classList.contains('dark-mode')) {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
});

// Call the function to set the initial mode when the page loads
setInitialMode();
