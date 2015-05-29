head.ready(function() {

	// nav
	(function () {
		var nav = $('.js-nav');
		$('.js-nav-btn').on('click', function () {
			nav.slideToggle();
			return false;
		});
		nav.find('a').on('click', function () {
			nav.slideUp();
		});
	}());

	// share
	(function () {
		$('.js-share-btn').on('click', function () {
			$('.js-share').slideToggle();
			return false;
		});
	}());

	// benefits
	(function () {
		var link = $('.js-benefits-link'),
			el = $('.js-benefits-el'),
			popup = $('.js-benefits-popup'),
			close = $('.js-benefits-close');
		link.on('click', function () {
			var index = $(this).index();
			el.hide();
			el.eq(index).show();
			popup.fadeIn();
			return false;
		});
		close.on('click', function () {
			popup.fadeOut();
		})
	}());

	// about
	(function () {
		$('.js-about-link').on('click', function () {
			$('.js-about-more').slideToggle();
			return false;
		});
	}());

	// fancybox
	(function () {
		var fb = $('.fancybox'),
			fbForm = $('.fancybox-form');
		if (fb.length) {
			fb.fancybox({
				margin: 10,
				padding: 0,
				prevEffect: 'none',
				nextEffect: 'none',
				helpers: {
					overlay: {
				    	locked: false
					},
					title : {
						type : 'inside' // 'float', 'inside', 'outside' or 'over'
					}
				}
			});
		};
		if (fbForm.length) {
			fbForm.fancybox({
				margin: 10,
				padding: 0,
				helpers: {
					overlay: {
				    	locked: false
					}
				}
			})
		};
	}());

	// nav
	(function () {

	}());

	// progress
	(function () {
		var sl = $('.js-sl');
		if (sl.length) {
			sl.slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				slide: '.js-sl-item',
				responsive: [{
				    breakpoint: 1020,
				    settings: {
				    	slidesToShow: 2,
				    	slidesToScroll: 2
				    }
				},
				{
				    breakpoint: 760,
				    settings: {
				    	slidesToShow: 1,
				    	slidesToScroll: 1
				    }
				}]
			});
		};
	}());

	// ajax form
	(function () {
		var inner = $('.js-form-in'),
			result = $('.js-form-result');

		$.validate({
			onSuccess : function() {
				post_data = {
				    'user_name': $('input[name=user_name]').val(), 
				    'user_phone': $('input[name=user_phone]').val()
				};
				
				//Ajax post data to server
				$.post('send.php', post_data, function(response){  
				    if (response.type == 'error'){ //load json data from server and output message     
				        output = '<div class="error">'+response.text+'</div>';
				    }
				    else {
				        output = '<div class="success">'+response.text+'</div>';
				        //reset values in all input fields
				        inner.slideUp();
				        result.slideDown();
				    }
				}, 'json');
				return false;
			}
		});

	}());

});