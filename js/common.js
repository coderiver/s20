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

});