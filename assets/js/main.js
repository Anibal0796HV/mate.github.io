/*=============== PARALLAX ===============*/
let parrallax = new Rellax('.parrallax')

/*=============== GSAP ANIMATION ===============*/
gsap.from('.boton', 1.2, {opacity: 0, y: -60, daly: 1})
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, daly: .1})
gsap.from('.home__pine', 1.2, {opacity: 0, y: 150, daly: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, y: 150, daly: .5})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, y: -150, daly: .6})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, daly: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, daly: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, y: -200, daly: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -60, daly: 1})
