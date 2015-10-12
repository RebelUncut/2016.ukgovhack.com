$("#faq li").matchHeight();

$("#schedule nav h2").click(function() {
	var clickedItem = $(this).attr("id");

	$("#schedule nav h2").removeClass("active");
	$(this).addClass("active");

	$("#schedule ul").removeClass("active");
	$("#schedule ul").filter("#" + clickedItem).addClass("active");
});