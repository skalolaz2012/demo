// ДЕЛАЕМ САМИ добавление count элементов изображений
var count = 26 //количество пикчерзов
let into = document.getElementById('slider-container');
// накидываем пикчерзов в HTML
let firstChild = into.firstChild;
for (var j = 0; j < count; j++) {
	var myIMG = document.createElement ('img');
	myIMG.src = 'images/' + j + '.jpeg';
	into.insertBefore(myIMG,firstChild)
}
// оборачиваем в div
var images = document.getElementsByTagName('img');
for(var i=0; i<images.length; i++) {
    var wrapper = document.createElement('div');
	wrapper.classList.add('slide', 'fade');
    wrapper.innerHTML = images[i].outerHTML;
    images[i].parentNode.replaceChild(wrapper,images[i])
}
// добавляем точки
let dots = document.getElementById("dots-wrapper");
let secondChild = dots.firstChild;
for(var k=0; k<=count-1; k++) {
	var wrapperDot = document.createElement('div');
	wrapperDot.classList.add('dot-navigation');
	wrapperDot.setAttribute('data-index',k+1)
	dots.insertBefore(wrapperDot,secondChild);
}
//всё круто, дальше косметика))
let INDEX = 0;

function showSlides(index) {
    // извлекаем слайды и навигационные точки
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot-navigation');

    // // проверка диапазона индекса
    if (index >= slides.length) INDEX = 0;

    if (index < 0) INDEX = slides.length - 1;

    // скрытие слайдов и удаление активной точки в навигации
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove("active-dot");
    }

    // показ активнового слайда и активация точки навигации
    slides[INDEX].style.display = "block";
    dots[INDEX].classList.add("active-dot");
};

showSlides(INDEX);

// событие при нажатии на левую стрелку
document.querySelector("#arrow-prev").addEventListener('click', function () {
    showSlides(--INDEX);
});

// событие при нажатии на правую стрелку
document.querySelector("#arrow-next").addEventListener('click', function () {
    showSlides(++INDEX);
});

// обработка событий для точек
for (let elem of document.querySelectorAll('.dot-navigation')) {
    elem.addEventListener('click', function (event) {
        let dotIndex = event.target.getAttribute('data-index');

        // вызов функции для прокрутки слайдера
        showSlides(INDEX = dotIndex - 1)
    });
};

// автоматическое слайд-шоу
setInterval(function () {
    showSlides(++INDEX);
}, 10000);

