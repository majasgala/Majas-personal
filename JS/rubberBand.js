// JavaScript Document


        //--================================ 果凍效果 Icon(外掛) ====================================//
		$(function(){
			$('.Icon').each(function(){
				var $this = $(this), 
					$HeroImg = $this.find('.HeroImg');
				
				$this.hover(function(){
					$HeroImg.toggleClass("rubberBand");
			    });
            });
		});
