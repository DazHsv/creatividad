document.addEventListener('DOMContentLoaded', function(){
	var timer = document.getElementById('timer'),
		title = document.querySelector('.title'),
		meridian = document.getElementById('meridian'),
		container = document.getElementById('container'),
		hcw = document.querySelector('.hours').style,
		mcw = document.querySelector('.minutes').style,
		scw = document.querySelector('.seconds').style;
	var time, hours, minutes, seconds, message;

	setInterval(function(){
		container.classList.add('visible');
	}, 1000);

	setInterval(function(){

		time = new Date();
		hours = time.getHours();
		minutes = time.getMinutes();
		seconds = time.getSeconds();

		message = ( (hours > 12) ? "Buenas tardes" : (hours > 19) ? "Buenas noches" : "Buenos días" ) + '!';

		title.innerHTML = message;
		timer.innerHTML = (hours < 10 ? '0' : '') + hours + ':'
		 				+ (minutes <10 ? '0' : '') + minutes + ':'
		 				+ (seconds < 10 ? '0' : '') + seconds;
		meridian.innerHTML = (hours < 12 ? 'a.m.' : 'p.m.');

		hcw.boxShadow = ( (240/24)*hours ) + "px 0 0 #fff inset";
		mcw.boxShadow = ( (240/60)*minutes ) + "px 0 0 #FF5722 inset";
		scw.boxShadow = ( (240/60)*seconds ) + "px 0 0 #FFEB3B inset";

	}, 1000);

});