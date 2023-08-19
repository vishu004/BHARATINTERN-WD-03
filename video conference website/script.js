// JavaScript
      // Get the button element
      var button = document.getElementById("toggle-button");
  
      // Add a click event listener to the button
      button.addEventListener("click", function() {
        // Get the body element
        var body = document.body;
  
        // Toggle the dark-mode class on the body element
        body.classList.toggle("dark-mode");
      });