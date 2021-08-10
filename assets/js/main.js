/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId)
	const nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle', 'nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		let sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.add('active')
		} else {
			document
				.querySelector(`.nav__menu a[href*=${sectionId}]`)
				.classList.remove('active')
		}
	})
}

/*===== SHOW SCROLL UP =====*/
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up')

	if (this.scrollY >= 200) {
		scrollUp.classList.add('show-scroll')
	} else {
		scrollUp.classList.remove('show-scroll')
	}
}

window.addEventListener('scroll', scrollUp)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	// reset: true,
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', { delay: 200 })
sr.reveal('.home__img', { origin: 'right', delay: 400 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 500 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 400 })
sr.reveal('.about__text', { delay: 500 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', { interval: 200 })
sr.reveal('.contact__input', { delay: 200 })
sr.reveal('.contact__button', { delay: 600 })

/*SCROLL FOOTER*/
sr.reveal('.footer__title', {})
sr.reveal('.footer__text', { delay: 200 })
sr.reveal('.footer__link', { delay: 200, interval: 200 })
sr.reveal('.footer__social', { delay: 200, interval: 200 })
