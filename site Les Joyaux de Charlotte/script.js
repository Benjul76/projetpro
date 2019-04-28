    $(document).ready(function () { 
    	$(".navebar").mouseover(function () {
    		var $ul = $(this).find("ul"); 
    		$(this).hover(function () {
    			var tempHeight = $ul.css("height", "auto").height(); 
    			$ul
    				.height(0) 
    				.stop() 
    				.animate({ height: tempHeight.toString() }, 500); 
    		}, function () {
    			$ul
    				.stop() 
    				.animate({ height: "0" }, 500); 
    		});
    	});
    });