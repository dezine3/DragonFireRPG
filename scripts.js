document.addEventListener('DOMContentLoaded', function() {
  // Get all the accordion buttons
  var acc = document.getElementsByClassName("accordion");
  var i;

  // Add a click event listener to each accordion button
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      // Toggle the "active" class on the button
      this.classList.toggle("active");

      // Select the next element sibling (the panel) and toggle its visibility
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        // Panel is open, set maxHeight to null to close it
        panel.style.maxHeight = null;
      } else {
        // Panel is closed, set maxHeight to scrollHeight to open it
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});



document.addEventListener('DOMContentLoaded', (event) => {
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("openModalLink");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});