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
