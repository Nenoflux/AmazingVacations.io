

let m = 0;
function Slider() {
	var SlideImages = document.getElementsByTagName('img')
	var silder = document.getElementById('current');
	silder.style.backgroundImage = "url("+SlideImages[m].src+")"
	m++;
	console.log(m)
	if ( m >= SlideImages.length) {
		m=0;
		console.log(m);
	}
};

setInterval( Slider, 4000);