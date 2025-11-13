const overlay = document.getElementById("background-overlay");

function setTheme(gradient) {
  overlay.style.background = gradient;
  overlay.style.opacity = 1;
}

function clearTheme() {
  overlay.style.background = "#8080dd";
  overlay.style.opacity = 1;
}

document.getElementById("banana-section").addEventListener("mouseenter", () => {
  setTheme("linear-gradient(120deg, #681409, #c27e3f)");
});
document.getElementById("banana-section").addEventListener("mouseleave", clearTheme);

document.getElementById("secret-section").addEventListener("mouseenter", () => {
  setTheme("linear-gradient(120deg, #2a2a47, #2b2bbeff)");
});
document.getElementById("secret-section").addEventListener("mouseleave", clearTheme);

document.getElementById("zoid-section").addEventListener("mouseenter", () => {
  setTheme("linear-gradient(120deg, #127a88ff, #a3681aff)");
});
document.getElementById("zoid-section").addEventListener("mouseleave", clearTheme);
