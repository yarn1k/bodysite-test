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
	const hitsItems = $('.hits').find('.card-item');
	for (var i = 1; i < hitsItems.length; i++) {
		$(hitsItems[i]).hide();
	}
	$('.card-item__hit').text('хит');
	$('.card-item__hit').css({'right':'auto'});
	$('.card-btn').css({'padding':'12px 80px'});
}