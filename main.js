document.addEventListener('DOMContentLoaded', function(){
	var timer      = document.getElementById('timer'),
		title      = document.querySelector('.title'),
		//meridian = document.getElementById('meridian'),
		date       = document.getElementById('date'),
		container  = document.getElementById('container'),
		hcw        = document.querySelector('.hours').style,
		mcw        = document.querySelector('.minutes').style,
		scw        = document.querySelector('.seconds').style;
	var time, hours, minutes, seconds, message;

	setInterval(function(){
		container.classList.add('visible');
	}, 1000);

	setInterval(function(){

		time    = new Date();
		hours   = time.getHours();
		minutes = time.getMinutes();
		seconds = time.getSeconds();

		message = ( (hours > 19 ? 'Buenas noches' : ( (hours > 11) ? 'Buenas tardes' : 'Buenos días' ) ) ) + '!';

		title.innerHTML = message;

		date.innerHTML = time.getDate() + '/'
						+ (time.getMonth > 10 ? '' : '0') + time.getMonth() + '/'
						+ time.getFullYear();

		/*if(hours <= 9){ hours = '0' + hours }
		else if( hours >= 12 ){ hours = '0' + (hours - 12) }
		else if( hours <= 21 ){ hours = '0' + (hours - 12) };*/

		timer.innerHTML = hours + ':'
						+ ( minutes < 10 ? '0' : '') + minutes + ':'
						+ ( seconds < 10 ? '0' : '') + seconds;

		//meridian.innerHTML = (hours < 12 ? 'a.m.' : 'p.m.');

		hcw.boxShadow = ( (240/24)*hours )   + "px 0 0 #fff inset";
		mcw.boxShadow = ( (240/60)*minutes ) + "px 0 0 #FF5722 inset";
		scw.boxShadow = ( (240/60)*seconds ) + "px 0 0 #FFEB3B inset";

	}, 1000);

});