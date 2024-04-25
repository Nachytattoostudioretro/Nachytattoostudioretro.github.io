$(document).ready(function(){

    // Efecto menu
    $('.menu a').each(function(index, elemento){;
        $(this).css({
            'top':'-200px'
        });

        $(this).animate({
            top : '0'
        }, 1000 + (index * 500));
    });


    // Scroll Elementos Menu

    var sobreMi = $ ('#sobre-mi').offset().top,
        cotizacion = $('#cotizacion').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-sobre-mi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 480
        }, 500);
    });

    $('#btn-cotizacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: cotizacion
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

});


