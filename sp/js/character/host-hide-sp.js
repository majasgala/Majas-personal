// JavaScript Document

$(function(){
	
		$("#Dorothy").click(function(){
			$(".surface-Dorothy").show();
			$(".surface-Momotaro ,.surface-SnowWhite, .surface-Aladdin ,.surface-MermaidPrincess ,.surface-Alice").hide();
		});	
		
		$("#Momotaro").click(function(){
			$(".surface-Momotaro").show();
			$(".surface-Dorothy ,.surface-SnowWhite ,.surface-Aladdin ,.surface-MermaidPrincess ,.surface-Alice").hide();
		});	
		
		$("#SnowWhite").click(function(){
			$(".surface-SnowWhite").show();
			$(".surface-Dorothy ,.surface-Momotaro ,.surface-Aladdin ,.surface-MermaidPrincess ,.surface-Alice").hide();
		});	

		$("#Aladdin").click(function(){
			$(".surface-Aladdin").show();
			$(".surface-Dorothy ,.surface-Momotaro ,.surface-SnowWhite ,.surface-MermaidPrincess ,.surface-Alice").hide();
		});	

		$("#MermaidPrincess").click(function(){
			$(".surface-MermaidPrincess").show();
			$(".surface-Dorothy ,.surface-Momotaro ,.surface-SnowWhite ,.surface-Aladdin ,.surface-Alice").hide();
		});	

		$("#Alice").click(function(){
			$(".surface-Alice").show();
			$(".surface-Dorothy ,.surface-Momotaro ,.surface-SnowWhite ,.surface-Aladdin,.surface-MermaidPrincess ").hide();
		});	


});