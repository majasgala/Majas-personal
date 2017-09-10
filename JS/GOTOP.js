// JavaScript Document

/*-----------GOTOP-----------------*/	

			$(function () {
			$("#TOP > a").hide();
			$(window).scroll(function () {
				var scrollVal = $(this).scrollTop();
				$("span.qScrollTop").text(scrollVal);
				if(scrollVal > 200){
					$("#TOP > a").fadeIn('fast');
				}
				if(scrollVal < 200){
					$("#TOP > a").fadeOut('fast');
				}
			});
			});
		
			$(function(){
				$('#TOP > a').click(function(){
					var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
					$body.animate({
						scrollTop: 0
					}, 400);
			 
					return false;
				});
			});		
