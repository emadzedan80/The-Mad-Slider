// JavaScript Document
(function ( $ ) {

	$.fn.theMadSlider = function(options) {
		
		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			slideViewTime: 3000,
			leftArrow:".leftArrow",
			rightArrow:".rightArrow"
		}, options );
		
		var myfirstinterval = 0;
		var loopIsRunning = true;
		
		var currentSlider = 0;
		
		var old;
		
		var containerDiv = this;
		var fadeTime = 1000;
		
		var maxLength = containerDiv.find("img").length - 1;
		containerDiv.find("img:first").css({"opacity":"1","display":"block"});
		
		$(settings.leftArrow).click(function(){			
			clearInterval(myfirstinterval);
			loopIsRunning = false;
			
			currentSlider--;
			old = currentSlider + 1;
			
			
			if(old < 0){
				old = maxLength;
			}
			if(old > maxLength){
				old = 0;
			}
			
			if(currentSlider < 0){
				currentSlider = maxLength;
			}
			if(currentSlider > maxLength){
				currentSlider = 0;
			}
			
			containerDiv.find("img:eq(" + old + ")").animate({"opacity": 0}, 500);
		
			containerDiv.find("img:eq(" + currentSlider + ")").css("display", "block");
		
			containerDiv.find("img:eq(" + currentSlider + ")").animate({"opacity": 1}, 500, function() {
				// Animation complete.
				if(loopIsRunning == false){
					myLoop();
				}
				
			});		
		});
		
		$(settings.rightArrow).click(function(){
			clearInterval(myfirstinterval);
			loopIsRunning = false;
			
			currentSlider++;
			old = currentSlider - 1;
			
			
			if(old < 0){
				old = maxLength;
			}
			if(old > maxLength){
				old = 0;
			}
			
			if(currentSlider < 0){
				currentSlider = maxLength;
			}
			if(currentSlider > maxLength){
				currentSlider = 0;
			}
			
			containerDiv.find("img:eq(" + old + ")").animate({"opacity": 0}, 500);
		
			containerDiv.find("img:eq(" + currentSlider + ")").css("display", "block");
		
			containerDiv.find("img:eq(" + currentSlider + ")").animate({"opacity": 1}, 500, function() {
				// Animation complete.
				if(loopIsRunning == false){
					myLoop();
				}
				
			});
			
			
		});
		
		myLoop();
		
		function myLoop(){
			loopIsRunning = true;
			myfirstinterval = setInterval(function(){
				
				currentSlider++;
				old = currentSlider - 1;
				
				if(old < 0){
					old = maxLength;
				}
				if(old > maxLength){
					old = 0;
				}
				
				if(currentSlider < 0){
					currentSlider = maxLength;
				}
				if(currentSlider > maxLength){
					currentSlider = 0;
				}
				
				containerDiv.find("img:eq(" + old + ")").animate({"opacity": 0}, fadeTime);
			
				containerDiv.find("img:eq(" + currentSlider + ")").css("display", "block");
			
				containerDiv.find("img:eq(" + currentSlider + ")").animate({"opacity": 1}, fadeTime, function() {
					// Animation complete.
					
				});
			}, settings.slideViewTime + fadeTime);
		}
		
	}
	
	
	
}( jQuery ));

