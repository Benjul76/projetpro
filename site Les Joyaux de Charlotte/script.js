    $(document).ready(function () {
    	$(".navebar").mouseover(function () {
    		var $ul = $(this).find("ul");
    		$(this).mouseover(function () {
    			var navebar = $ul.css("height", "auto").height();
    				.height(0)
    				.stop()
    				.animate({ height:navebar.toString() }, 500);
    		}, function () 
    				.stop()
    				.animate({ height: "0" }, 500);
    		});
    	});
    });
