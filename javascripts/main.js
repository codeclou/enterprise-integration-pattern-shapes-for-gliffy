document.addEventListener("DOMContentLoaded", function (event) {
  var toggleMobileNavButton = document.getElementById("toggle-mobile-nav");
  toggleMobileNavButton.addEventListener("click", function (event2) {
    var mobileNavDiv = document.getElementById("mobile-nav");
    var mobileNavBurgerIcon = document.getElementById(
      "mobile-nav-button-burger"
    );
    var mobileNavCrossIcon = document.getElementById("mobile-nav-button-cross");
    if (mobileNavDiv.classList.contains("hidden")) {
      mobileNavDiv.classList.remove("hidden");
      mobileNavDiv.classList.add("block");
      mobileNavBurgerIcon.classList.remove("block");
      mobileNavBurgerIcon.classList.add("hidden");
      mobileNavCrossIcon.classList.remove("hidden");
      mobileNavCrossIcon.classList.add("block");
    } else {
      mobileNavDiv.classList.remove("block");
      mobileNavDiv.classList.add("hidden");
      mobileNavBurgerIcon.classList.remove("hidden");
      mobileNavBurgerIcon.classList.add("block");
      mobileNavCrossIcon.classList.remove("block");
      mobileNavCrossIcon.classList.add("hidden");
    }
  });
});
