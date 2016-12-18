//var sb_menu = document.querySelector(".sb_menu")
var menu1 = document.querySelector(".ats");
var menu2 = document.querySelector(".sks");
var menu3 = document.querySelector(".pojar");
var menu4 = document.querySelector(".video");
var menu5 = document.querySelector(".zvuk");
var menu6 = document.querySelector(".control");
var menu7 = document.querySelector(".rozetka");
var menu8 = document.querySelector(".avtomat");
var menu9 = document.querySelector(".upravlenie");
var menu10 = document.querySelector(".prom");
var menu = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10];

var article1 = document.querySelector(".article_ats");
var article2 = document.querySelector(".article_sks");
var article3 = document.querySelector(".article_pojar");
var article4 = document.querySelector(".article_video");
var article5 = document.querySelector(".article_zvuk");
var article6 = document.querySelector(".article_control");
var article7 = document.querySelector(".article_rozetka");
var article8 = document.querySelector(".article_avtomat");
var article9 = document.querySelector(".article_upravlenie");
var article10 = document.querySelector(".article_prom");
var article = [article1, article2, article3, article4, article5, article6, article7, article8, article9, article10];



menu[1].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[1]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[1].classList.add("active");
  	article[1].classList.add("active");
  }});

menu[0].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[0]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[0].classList.add("active");
  	article[0].classList.add("active");
  }});

menu[2].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[2]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[2].classList.add("active");
  	article[2].classList.add("active");
  }});

menu[3].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[3]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[3].classList.add("active");
  	article[3].classList.add("active");
  }});

menu[4].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[4]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[4].classList.add("active");
  	article[4].classList.add("active");
  }});

menu[5].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[5]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[5].classList.add("active");
  	article[5].classList.add("active");
  }});

menu[6].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[6]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[6].classList.add("active");
  	article[6].classList.add("active");
  }});

menu[7].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[7]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[7].classList.add("active");
  	article[7].classList.add("active");
  }});

menu[8].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[8]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[8].classList.add("active");
  	article[8].classList.add("active");
  }});

menu[9].addEventListener("click", function(event) {
  event.preventDefault();
  console.log(menu[9]);
  for (var i = 0; i < menu.length; i++) {
  		if (menu[i].classList.contains("active") || article[i].classList.contains("active")) {
  		menu[i].classList.remove("active");
  		article[i].classList.remove("active");            
  }
  	
  	menu[9].classList.add("active");
  	article[9].classList.add("active");
  }});



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
