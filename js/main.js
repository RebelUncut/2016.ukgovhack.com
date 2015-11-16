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

$('#hero a.video').magnificPopup({ items: { src: 'https://www.youtube.com/watch?v=pfqh14ZaMfg' }, type: 'iframe' });

$("#schedule nav h2").click(function() {
	var clickedItem = $(this).attr("id");

	$("#schedule nav h2").removeClass("active");
	$(this).addClass("active");

	$("#schedule ul").removeClass("active");
	$("#schedule ul").filter("#" + clickedItem).addClass("active");
});

$("#partners li > *").matchHeight();

// Res

$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
});

function checkSize(){
    if ($("header ul").css("display") == "none" ){

        $("#faq li p").slideUp();

        $("#faq li h2").click(function() {
            $(this).parent().children("p").slideDown("fast");
        });




    }
}
