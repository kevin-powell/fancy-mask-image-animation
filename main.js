const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");

resetButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
});
