$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').animate({
            scrollTop: h.offset().top - 70
        }, 400);
        
        
    });

    var btnUp = $('#return-to-top');

    function scrollBtn() {
    	var top = $(this).scrollTop();

    	if (top > 50) {
    		btnUp.fadeIn(200);
    	} 
    	else {
    		btnUp.fadeOut(200);
    	}
    }

    scrollBtn();

		$(document).on('scroll', scrollBtn);

		
		btnUp.on('click', function () {
			$('html,body').animate({
				scrollTop: 0
			}, 500);
		});
});
