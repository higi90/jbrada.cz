$(function() {
	// Typed effect only on bigger screens
	if($(window).width() >= 768) {

		// Typed init
		$(".typed-text").typed({
			callback: function() {
				setTimeout(function(){
					$('body').removeClass('loading');
				}, 500);
			},
			typeSpeed: 20,
			strings: ["<span class=\"tag tag--red-dark\">&#x3C;?php</span> <br /><br /><span class=\"tag tag--red\">$website</span> = <span class=\"tag tag--pink\">new</span> <span class=\"tag tag--yellow-light\">Website</span>(<span class=\"tag tag--green-light\">'Portfolio'</span>);<br />^500<span class=\"tag tag--red\">$website</span>->setName(<span class=\"tag tag--green-light\">'Jiří Brada'</span>);^200<br /><span class=\"tag tag--red\">$website</span>-><span class=\"tag tag--run\">run()</span>;<br /><br /><span class=\"tag tag--red-dark\">?&#x3E;</span>"]
		});

	} else {
		$('body').removeClass('loading');
	}

	// CV aside click actions
	$('.nav-cv a, .me a').click(function(e){
		e.preventDefault();
		$('body').toggleClass('aside-opened');
	});

	$('.close a').click(function(e){
		e.preventDefault();
		$('body').removeClass('aside-opened');
	});
});
