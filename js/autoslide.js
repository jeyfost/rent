function autoSlide() {
	var slideWrap = jQuery('#slideWrap');
	var pic1 = jQuery('#switch1');
	var pic2 = jQuery('#switch2');
	var pic3 = jQuery('#switch3');
	var pic4 = jQuery('#switch4');
	var pic5 = jQuery('#switch5');
	var pic6 = jQuery('#switch6');
	var pic7 = jQuery('#switch7');
	var pic8 = jQuery('#switch8');

	if(pic1.attr('name') == 'active') {		
		slideWrap.animate({left: -960}, 500, function() {
			pic1.attr('name', 'notActive');
			pic2.attr('name', 'active');
			pic1.attr('style', '');
			pic2.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}
	
	if(pic2.attr('name') == 'active') {		
		slideWrap.animate({left: -1920}, 500, function() {
			pic2.attr('name', 'notActive');
			pic3.attr('name', 'active');
			pic2.attr('style', '');
			pic3.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}
	
	if(pic3.attr('name') == 'active') {		
		slideWrap.animate({left: -2880}, 500, function() {
			pic3.attr('name', 'notActive');
			pic4.attr('name', 'active');
			pic3.attr('style', '');
			pic4.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}

	if(pic4.attr('name') == 'active') {		
		slideWrap.animate({left: -3840}, 500, function() {
			pic4.attr('name', 'notActive');
			pic5.attr('name', 'active');
			pic4.attr('style', '');
			pic5.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}
	
	if(pic5.attr('name') == 'active') {		
		slideWrap.animate({left: -4800}, 500, function() {
			pic5.attr('name', 'notActive');
			pic6.attr('name', 'active');
			pic5.attr('style', '');
			pic6.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}

	if(pic6.attr('name') == 'active') {		
		slideWrap.animate({left: -5760}, 500, function() {
			pic6.attr('name', 'notActive');
			pic7.attr('name', 'active');
			pic6.attr('style', '');
			pic7.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}

	if(pic7.attr('name') == 'active') {		
		slideWrap.animate({left: -6720}, 500, function() {
			pic7.attr('name', 'notActive');
			pic8.attr('name', 'active');
			pic7.attr('style', '');
			pic8.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}

	if(pic8.attr('name') == 'active') {		
		slideWrap.animate({left: 0}, 500, function() {
			pic8.attr('name', 'notActive');
			pic1.attr('name', 'active');
			pic8.attr('style', '');
			pic1.attr('style', 'cursor: default; background-color: #62aab8;');
		});
	}

	setTimeout(autoSlide, 5000);
}

autoSlide();