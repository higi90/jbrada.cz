$(function() {
	$('body').removeClass('loading');

	// CV aside click actions
	$('.nav-cv a, .me a').click(function(e){
		e.preventDefault();
		$('body').toggleClass('aside-opened');
	});

	$('.close a').click(function(e){
		e.preventDefault();
		$('body').removeClass('aside-opened');
	});

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('body').removeClass('aside-opened');
        }
    });
});
