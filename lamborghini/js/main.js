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























