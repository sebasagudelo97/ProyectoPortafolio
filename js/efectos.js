$(document).ready(function(){
    var acerca_de = $('#acerca_de').offset().top,
    trabajos = $('#trabajos').offset().top,
    contacto = $('#contacto').offset().top,
    redes_sociales = $('#redes_sociales').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acerca_de - 100
        }, 500);
    });
});