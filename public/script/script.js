const signON = document.querySelector("#signON");

signON.addEventListener("click", (e) => {
  e.preventDefault;
  window.location.href = "/auth/google";
});
