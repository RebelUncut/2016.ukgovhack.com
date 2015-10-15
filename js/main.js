$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 82
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

$("#faq li, #challenges li, #data li, #venue .travel > *").matchHeight();

$("#schedule nav h2").click(function() {
	var clickedItem = $(this).attr("id");

	$("#schedule nav h2").removeClass("active");
	$(this).addClass("active");

	$("#schedule ul").removeClass("active");
	$("#schedule ul").filter("#" + clickedItem).addClass("active");
});