// function openCity(evt, cityName) {
//     let i, nuvcontent, nuvlinks;
//     nuvcontent = document.getElementsByClassName('nuvcontent');
//     for( i = 0; i < nuvcontent.length; i++) {
//         nuvcontent[i].style.display = 'none';
//     }
//     nuvlinks = document.getElementsByClassName('nuvlinks');
//     for( i = 0; i < nuvlinks.length; i++ ) {
//         nuvlinks[i].className = nuvlinks[i].className.replace('active', '');
//     }
//     document.getElementById(cityName).style.display = 'block';
//     evt.currentTarget.className += 'active';
//
// }



function openCity(evt, cityName) {
    // Declare all variables
    var i, nuvcontent, nuvlinks;

    // Get all elements with class="tabcontent" and hide them
    nuvcontent = document.getElementsByClassName("nuvcontent");
    for (i = 0; i < nuvcontent.length; i++) {
        nuvcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    nuvlinks = document.getElementsByClassName("nuvlinks");
    for (i = 0; i < nuvlinks.length; i++) {
        nuvlinks[i].className = nuvlinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}






let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo-cursor");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i= 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}



let currentIndex = 0;
const column = document.querySelectorAll('.column')
const indicators = document.querySelectorAll('.indicator');
const totalSlides = Math.ceil(column.length / 3);

function showSlide(index) {
    if(index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100 / totalSlides;
    document.querySelector('.column').style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, idx) => {
        indicator.classList.toggle('active', idx === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

let slideInterval = setInterval(nextSlide, 7000);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
    });
});

showSlide(currentIndex);























