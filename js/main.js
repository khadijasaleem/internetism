(function() {
	const navTrigger = document.querySelector('.nav-trigger');
	const body = document.querySelector('body')
	const mainNav = document.querySelector('#main-nav')

	navTrigger.addEventListener('click', toggleNavigation);
	
	function toggleNavigation (event) {
		event.preventDefault();
		body.classList.toggle('nav-open')
		mainNav.classList.toggle('is-visible')
	}
})()
