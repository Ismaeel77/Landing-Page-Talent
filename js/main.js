let marker = document.querySelector("#marker");
let links = document.querySelectorAll("ul.links a");
const cursor = document.querySelector("div.cursor");

// Animate Indicator on links
function indicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

// Animate Indicator on links
links.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    indicator(e.target);
  });
});

// Customization of the cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.left = (e.pageX - scrollX) + "px";
  cursor.style.top = (e.pageY - scrollY) + "px";
  cursor.style.display = "block";
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
