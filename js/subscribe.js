var link = document.querySelector(".subscribe-btn");
var popup = document.querySelector(".subscribe");
var shade = document.querySelector(".shade");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("subscribe-show");
    shade.classList.add("shade-show");
    });

shade.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("subscribe-show");
    shade.classList.remove("shade-show");
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("subscribe-show")) {
            popup.classList.remove("subscribe-show");
            shade.classList.remove("shade-show");
          }
        };
    });
