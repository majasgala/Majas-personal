$(function(){
	
	var PageWidth, PageHeight;
	
	var BODY = $("body");
	
	var WIN = $(window);
	
	var BOX = $("#BOX");
	
	var MASK = $("#MASK");
	
	var LOADING = $("#LOADING");
	
	var WRAPPER = $("#WRAPPER");
	
	var MENULI = $("#MENU li");
	
	var CONTENT = $(".CONTENT");
	
	var WHO = 0;
	
//==滿版設計========================================

	function FULL(){
			
		PageWidth= WIN.innerWidth();
			
		PageHeight= WIN.innerHeight();
		
		BOX.css({width:PageWidth, minHeight:PageHeight});
		
		MASK.css({width:PageWidth, minHeight:PageHeight});
		
		WRAPPER.css({width:PageWidth, minHeight:PageHeight});
		
		LOADING.css({width:PageWidth, minHeight:PageHeight});
					
	}
	
	WIN.scrollTop(1);
	
	FULL();
	
	WIN.bind('orientationchange resize', FULL);
	
	
//==點選按鈕===============================================
	
	var AA = $("#AA");
	var BB = $("#BB");
	var CC = $("#CC");
	var DD = $("#DD");
	var EE = $("#EE");
	
	AA.on("click", function(){ CHANGE( "Top.html" )} );
	BB.on("click", function(){ CHANGE( "System.html")} );
	CC.on("click", function(){ CHANGE( "Story.html" ) } );
	DD.on("click", function(){ CHANGE( "Character.html" ) } );
	EE.on("click", function(){ CHANGE( "Help.html" )} );
	
	/*$(document).on("click", '#EE', function(){ /*$(this).scrollTop(500);alert("The paragraph was clicked."); } );*/
	

	CHANGE( "Top.html" );

	function CHANGE( PAGE ){
		function Top(){
			BODY.scrollTop(0);
		}
		
		LOADING.css({ display:"block" }).transition({ perspective:PageWidth, rotateY :"0deg", zIndex:222 },900);
		BOX.transition({ perspective:PageWidth, rotateY :"180deg", zIndex:111 }, 900, GOGOGO );
		function GOGOGO(){
			BOX.load(PAGE, OKOK);
		}

		function OKOK(){
			LOADING.transition({ perspective:PageWidth, rotateY :"180deg", zIndex:111 },900, function(){ LOADING.css({ display:"none"}) });
			BOX.css({ rotateY :"-180deg", zIndex:222  }).transition({ perspective:PageWidth, rotateY :"0deg" },900);
			WIN.scrollTop(1);
		}

	}
	
});

