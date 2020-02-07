//Animate Smooth using smooth scroll (jquery)
$("#view-about").on("click", function() {
  const images = $("#about").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});

//JS
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function() {
  alert("Submission has not been sent. Functionality is used for UI purposes.");
});
