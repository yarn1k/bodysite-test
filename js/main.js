$( document ).ready(function() {
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

$('.advantages-carousel').slick({
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 3,
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

$('.hits-carousel').slick({
	arrows: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	slidesToShow: 4,
	slidesToScroll: 4,
	speed: 500,
	infinite: true,
	draggable: false,
	responsive: [
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 800,
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
	const catalogTitle = $('.catalog').find('.page__title');
	catalogTitle.text('Популярные категории');
	catalogTitle.removeClass('catalog__title');
	const cardItems = $('.catalog').find('.card-item');
	const catalogCounts = $('.catalog__count');
	for (let i = 0; i < catalogCounts.length; i++) {
		let currentText = $(catalogCounts[i]).text();
		$(catalogCounts[i]).text(currentText.replace('товара', '').trim());
	}
	for (let i = 0; i < cardItems.length - 1; i++) {
		$(cardItems[i]).parent().append('<div class="catalog__hr"></div>');
	}
	$('.card-item__hit').text('хит');
	$('.card-item__hit').css({'right':'auto'});
	$('.card-btn').css({'padding':'0px 50px'});
}
});