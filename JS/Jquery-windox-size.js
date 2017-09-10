
$(document).ready(function(){

$(window).resize(function(){test();


function test(){
	
	if( $(window).width() <= 1920){
		
		$('li').ready(function() {
			$( '.Character' ).css( "margin-top","110%" );
			$( '.Character' ).css( "margin-left","183%" );
		});
		

		$('li').ready(function() {
			$( '.Mycard' ).css( "margin-top","100%" );
			$( '.Mycard' ).css( "margin-left","330%" );
		});


		$('li').ready(function() {
			$( '.New' ).css( "margin-top","43%" );
			$( '.New' ).css( "margin-left","147%" );
		});


		$('li').ready(function() {
			$( '.System' ).css( "margin-top","100%" );
			$( '.System' ).css( "margin-left","137%" );
		});


		$('li').ready(function() {
			$( '.Help' ).css( "margin-top","306%" );
			$( '.Help' ).css( "margin-left","229%" );
		});


		$('li').ready(function() {
			$( '.Video' ).css( "margin-top","147%" );
			$( '.Video' ).css( "margin-left","55.8%" );
		});


		$('li').ready(function() {
			$( '.Story' ).css( "margin-top","96%" );
			$( '.Story' ).css( "margin-left","76%" );
		});

	
	}else if( $(window).width() <= 1800){
		
		$('li').ready(function() {
			$( '.Character' ).css( "margin-top","120%" );
			$( '.Character' ).css( "margin-left","200%" );
		});
		

		$('li').ready(function() {
			$( '.Mycard' ).css( "margin-top","75%" );
			$( '.Mycard' ).css( "margin-left","380%" );
		});


		$('li').ready(function() {
			$( '.New' ).css( "margin-top","18%" );
			$( '.New' ).css( "margin-left","140%" );
		});


		$('li').ready(function() {
			$( '.System' ).css( "margin-top","90%" );
			$( '.System' ).css( "margin-left","120%" );
		});


		$('li').ready(function() {
			$( '.Help' ).css( "margin-top","330%" );
			$( '.Help' ).css( "margin-left","180%" );
		});


		$('li').ready(function() {
			$( '.Video' ).css( "margin-top","150%" );
			$( '.Video' ).css( "margin-left","-5%" );
		});


		$('li').ready(function() {
			$( '.Story' ).css( "margin-top","55%" );
			$( '.Story' ).css( "margin-left","15%" );
		});

	
	
	}
		
}

});
});