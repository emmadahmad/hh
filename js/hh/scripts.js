$(function() 
{
	var $ = jQuery.noConflict();
	$('input:text, input:password, select, textarea').addClass("form-control");
	$("button:not(.btn)").addClass("btn");
	$('.form-list:not(.list-unstyled), .links:not(.list-unstyled), .options-list:not(.list-unstyled)').addClass("list-unstyled");
	$('.in-stock').html("In Stock");
	$('.out-of-stock').html("Out of Stock");
	$(".cms-home .std ul.messages").prependTo($(".cms-home .std .container"));
	
	$(window).scroll(function ()
	{
		if ($(this).scrollTop() > 300)
		{
			$("#backtop").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		else
		{
			$("#backtop").css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
	});
	
	$('#backtop').click(function () 
	{
		$('body,html').animate(
		{
			scrollTop: 0
		}, 800);
	});
	
	var owl_4_grid = $(".home-products-4");
	var owl_3_grid = $(".home-products-3");
	var owl_1_grid = $(".home-products-1");

	owl_4_grid.owlCarousel({
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1000,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,1], //2 items between 600 and 0
	      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	      pagination : false,
	      autoHeight : true
	  });
	
	owl_3_grid.owlCarousel({
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1000,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,1], //2 items between 600 and 0
	      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	      pagination : false,
	      autoHeight : true
	  });
	
	owl_1_grid.owlCarousel({
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1000,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [900,2], // betweem 900px and 601px
	      itemsTablet: [600,1], //2 items between 600 and 0
	      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	      pagination : false,
	      autoHeight : true
	  });

	// Custom Navigation Events
	$(".lat-next").click(function() {
		owl_4_grid.trigger('owl.next');
	});
	$(".lat-prev").click(function() {
		owl_4_grid.trigger('owl.prev');
	});
	$(".lat-next").click(function() {
		owl_3_grid.trigger('owl.next');
	});
	$(".lat-prev").click(function() {
		owl_3_grid.trigger('owl.prev');
	});
	
	//Zoom
	
	$(".zoom-img").zoom();
	$('.tool-tip').hover(function() {
		$(this).tooltip('show');
	});
	
	$(".gallery-more-views").click(function()
	{
		$(".zoom-img .img-thumbnail").attr("src", $(this).data("thumb"));
		$(".zoom-img .zoomImg").attr("src", $(this).data("src"));
		$(".zoom-img .img-thumbnail").attr("width", "360");
		return false;
	});
			
	$("#narrow-by-list .filter-name .filter-icon").click(function()
	{
		var filterid = $(this).data( "filter" );
		if ($(this).hasClass("fa-plus"))
		{
			$(this).removeClass("fa-plus");
			$(this).addClass("fa-minus");
			$("#" + filterid).css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		else if ($(this).hasClass("fa-minus"))
		{
			$(this).removeClass("fa-minus");
			$(this).addClass("fa-plus");
			$("#" + filterid).css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
		
	});
	
	$("button.navbar-toggle").click(function()
	{
		if ($(this).hasClass("opened"))
		{
			$(this).removeClass("opened");
			$(".navbar-xs-nav").css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
		else
		{
			$(this).addClass("opened");
			$(".navbar-xs-nav").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
			$(".navbar-xs-nav li").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		
	});
	
	$(".navbar-xs-nav>li.parent>a").click(function()
	{
		if ($(this).hasClass("opened"))
		{
			$(this).removeClass("opened");
			$(this).parent("li").css({ "background-color": "#DACEA6"});
			$(this).siblings("ul").css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
		else
		{
			$(this).addClass("opened");
			$(this).parent("li").css({ "background-color": "#EDE5CD"});
			$(this).siblings("ul").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		return false;		
	});	
	$(".navbar-xs-nav>li>ul>li.parent>a").click(function()
	{
		if ($(this).hasClass("opened"))
		{
			$(this).removeClass("opened");
			$(this).parent("li").css({ "background-color": "#DACEA6"});
			$(this).siblings("ul").css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
		else
		{
			$(this).addClass("opened");
			$(this).parent("li").css({ "background-color": "#DACEA6"});
			$(this).siblings("ul").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		return false;		
	});	
	$(".navbar-xs-nav>li>ul>li>ul>li.parent>a").click(function()
	{
		if ($(this).hasClass("opened"))
		{
			$(this).removeClass("opened");
			$(this).parent("li").css({ "background-color": "#DACEA6"});
			$(this).siblings("ul").css({ "visibility": "hidden", "opacity": "0", "height" : "0" });
		}
		else
		{
			$(this).addClass("opened");
			$(this).parent("li").css({ "background-color": "#EDE5CD"});
			$(this).siblings("ul").css({ "visibility": "visible", "opacity": "1", "height" : "auto" });
		}
		return false;		
	});	
	
	
});