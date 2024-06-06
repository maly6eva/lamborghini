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


//
// let currentIndex = 0;
// const column = document.querySelectorAll('.column')
// const indicators = document.querySelectorAll('.indicator');
// const totalSlides = Math.ceil(column.length / 3);
//
// function showSlide(index) {
//     if(index < 0) {
//         currentIndex = totalSlides - 1;
//     } else if (index >= totalSlides) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }
//
//     const offset = -currentIndex * 100 / totalSlides;
//     document.querySelector('.column').style.transform = `translateX(${offset}%)`;
//
//     indicators.forEach((indicator, idx) => {
//         indicator.classList.toggle('active', idx === currentIndex);
//     });
// }
//
// function nextSlide() {
//     showSlide(currentIndex + 1);
// }
//
// let slideInterval = setInterval(nextSlide, 7000);
//
// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         showSlide(index);
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextSlide, 7000);
//     });
// });
//
// console.log(showSlide(currentIndex));


// function imageZoom(imgID, resultID) {
//     let img, lens, result, cx, cy;
//     img = document.getElementById(imgID);
//     result = document.getElementById(resultID);
//
//     lens = document.createElement("DIV");
//     lens.setAttribute("class", "img-zoom-lens");
//
//     img.parentElement.insertBefore(lens, img);
//
//     cx = result.offsetWidth / lens.offsetWidth;
//     cy = result.offsetHeight / lens.offsetHeight;
//
//     result.style.backgroundImage = "url('" + img.src + "')";
//     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) +"px";
//
//     lens.addEventListener("mousemove", moveLens);
//     img.addEventListener("mousemove", moveLens);
// }
//  function moveLens(e) {
//     let pos, x, y;
//     e.preventDefault();
//     pos = getCursorPos(e);
//
//     x = pos.x -(lens.offsetWidth / 2);
//     y= pos.y -(lens.offsetWidth / 2);
//
//     if (x > img.width - lens.offsetWidth) {
//         x = img.width - lens.offsetWidth;
//     }
//     if (x < 0) {
//         x = 0;
//     }
//     lens.style.left = x + "px";
//     lens.style.top = y + "px";
//     result.style.backgroundPosition = "-" + (x * cx) + "px-" + (y * cy) + "px";
//  }
//
//  function getCursorPos(e) {
//      let a, x = 0, y = 0;
//      e = e || window.event;
//      a = img.getBoundingClientRect();
//      x = e.pageX - a.left;
//      y = e.pageY - a.top;
//
//      x = x - window.pageXOffset;
//      y = y - window.pageYOffset;
//      return {
//          x: x, y: y
//      };
//
//  }
// imageZoom("myimage", "myresult");



function imageZoom(imgID, resultID) {
    let img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);

    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");

    img.parentElement.insertBefore(lens, img);

    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;

    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        let pos, x, y;

        e.preventDefault();

        pos = getCursorPos(e);

        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);

        if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
        if (x < 0) { x = 0; }
        if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
        if (y < 0) { y = 0; }

        lens.style.left = x + "px";
        lens.style.top = y + "px";

        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;

        a = img.getBoundingClientRect();

        x = e.pageX - a.left;
        y = e.pageY - a.top;

        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}


imageZoom("myimage", "myresult");
















