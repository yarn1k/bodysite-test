const ratings = $('.rating');

if (ratings.length > 0) {
	initRatings();
}

function initRatings() {
	let ratingActive, ratingValue;
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}
	
	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
	}
	
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}

$('.hits-carousel').slick({
	arrows: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	slidesToShow: 4,
	slidesToScroll: 1,
	speed: 500,
	infinite: false,
	draggable: false,
	waitForAnimate: true,
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$(".card-item__zoom").click(function() {
	var cardImage = $(this).parent().find('.card-item__image');
	var srcValue = cardImage.attr('src');
	var altValue = cardImage.attr('alt');
	$(".large-image").attr('src', srcValue);
	$(".large-image").attr('alt', altValue);
	$('.popup-fade').fadeIn();
});

$(".close-btn").click(function() {
	$(".popup-fade").fadeOut();
})

if ($(window).width() <= 576) {
	const advantagesItems = $('.advantages__item');
	for (var i = 1; i < advantagesItems.length; i++){
		$(advantagesItems[i]).hide();
	}
	const catalogTitle = $('.catalog').find('.page__title');
	catalogTitle.text('Популярные категории');
	catalogTitle.removeClass('catalog__title');
	const cardItems = $('.catalog').find('.card-item');
	const catalogCounts = $('.catalog__count');
	for (var i = 0; i < catalogCounts.length; i++) {
		let currentText = $(catalogCounts[i]).text();
		$(catalogCounts[i]).text(currentText.replace('товара', '').trim());
	}
	for (var i = 0; i < cardItems.length - 1; i++) {
		$(cardItems[i]).parent().append('<hr class="catalog__hr">');
	}
	$('.card-item__hit').text('хит');
	$('.card-item__hit').css({'right':'auto'});
	$('.card-btn').css({'padding':'12px 80px'});
}