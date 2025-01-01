document.addEventListener("DOMContentLoaded", () => {
  const cookieContainer = document.querySelector("#cookie-container");
  const acceptButton = document.querySelector("#accept-cookie");
  const declineButton = document.querySelector("#decline-cookie");

  const cookieConsent = localStorage.getItem("cookieConsent");

  // handle visibility on page load
  if (cookieConsent === "true") {
    cookieContainer.style.display = "none";
  } else {
    cookieContainer.style.display = "flex";
  }

  // handle click
  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true");
    cookieContainer.style.display = "none";
  });

  declineButton.addEventListener("click", () => {
    cookieContainer.style.display = "none";
  });
});
