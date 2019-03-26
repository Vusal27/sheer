var btn = document.querySelector('.row__phone-btn');
var popup = document.querySelector('.popup');

btn.addEventListener('click', function() {
    popup.classList.add('popup--active');
});

popup.addEventListener('click', function(e) {
    var target = e.target;

    if (target == popup || target.classList.contains('form__close')) {
        popup.classList.remove('popup--active');
    }
});

// Burger
var burger = document.querySelector('.burger-link');

var mbMenu = document.querySelector('.mb-menu');

burger.addEventListener('click', toggleClass);

var mbMenuLink = document.querySelectorAll (".mb-menu__item");

for (var i=0; i < mbMenuLink.length; i++){
	mbMenuLink[i].addEventListener('click', toggleClass);
}

function toggleClass() {
    burger.classList.toggle("burger-link--active");
    mbMenu.classList.toggle("mb-menu--active");
}