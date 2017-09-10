// JavaScript Document

(function ($) {

$(window).load(function() { 
	$("#status").fadeOut(); // will first fade out the loading animation
	$("#preloader").delay(400).fadeOut("medium"); // will fade out the white DIV that covers the website.
});

$(document).ready(function() {
    
    //Remove 300ms lag set by -webkit-browsers     
    window.addEventListener('load', function() {
		FastClick.attach(document.body);
	}, false);	
    
    
    
    
    
});

}(jQuery));


    /*  Menu Slider Mouse Scroll - Test Purpose Only. Can be deleted     
    
    
    var selected_menu_item = document.getElementById( "selected" );
    var selected_menu_item_number = ($( ".menu a" ).index( selected_menu_item ) );
    menu_slider.trigger('owl.jumpTo', selected_menu_item_number);
    
    console.log(selected_menu_item_number);
    
    var scl=0; // Create a variable
    window.setInterval(function(){
       scl=0; // Reset this variable every 0.5 seconds
    }, 500);

    $('.menu').on('DOMMouseScroll mousewheel', function (e) { 
        if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        while(scl==0) { 
            menu_slider.trigger('owl.next');
            scl++;
        }
    } else {
        while(scl==0) { 
            menu_slider.trigger('owl.prev');
            scl++;
        }
    }
    });*/