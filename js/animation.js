$(document).ready(function() {

	/*Masquer les elements si le javascript est lu (exception IE8)*/
    $('.hidden_div').css('display', 'none');
    $('.arrow').css('display', 'inline');

	/*Ouverture/Fermeture des éléments*/
    $('.div').click(function() {
        var id = $(this).attr("id");
        if (document.getElementById('hidden_' + id).style.display == "none") {
            $('#hidden_' + id).stop().slideDown('slow');
        } else {
            $('#hidden_' + id).stop().slideUp('slow');
        }
    });

	/*scrolling à partir des éléments de la navbar*/
    $('a[href^="#"]').click(function() {
        var id = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    })

	/*Changement d'images lors du survol des flèches du slider*/
    $('.arrow').mouseover(function() {
        var id = $(this).attr("id");
        if (id == "prev") {
            $(this).attr("src", "img/whiteLeftArrow.png");
        } else {
            $(this).attr("src", "img/whiteRightArrow.png");
        }
    });
    $('.arrow').mouseout(function() {
        var id = $(this).attr("id");
        if (id == "prev") {
            $(this).attr("src", "img/blackLeftArrow.png");
        } else {
            $(this).attr("src", "img/blackRightArrow.png");
        }
    });

});

/*Fonction changeant les images du slider en fonction des clicks*/
var compteur = 0;
function changeImg(x) {
    if (x == "next") {
        compteur++;
    } else {
        compteur--;
    }
    if (compteur % 4 == 0) {
        document.getElementById("slider").src = "img/slider1.png";
    } else if (compteur % 4 == 1 || compteur % 4 == -3) {
        document.getElementById("slider").src = "img/slider2.png";
    } else if (compteur % 4 == 2 || compteur % 4 == -2) {
        document.getElementById("slider").src = "img/slider3.png";
    } else {
        document.getElementById("slider").src = "img/slider4.png";
    }
}
