(function($) {
  "use strict";
  // jQuery Banner Index 
		var slider = new MasterSlider();

		slider.control('arrows' ,{insertTo:'#masterslider-index'});	
		slider.control('bullets');	

		slider.setup('masterslider-index' , {
			width:1366,
			height:768,
			space:0,
            count: 3,
            view:"basic",
			layout:'fullscreen',
            speed:6,
			preload: 10,
			autoplay: true
		});
	// End jQuery Banner Index
})(jQuery);
	