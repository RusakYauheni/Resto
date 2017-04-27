	var menuElem = document.getElementById('navi-menu');
    var titleElem = document.getElementById('menu-toggle');
    var hidElem = document.getElementById('mask');

 titleElem.onclick = function() { 
menuElem.classList.toggle('open');
hidElem.classList.toggle('mask-hidden');

hidElem.onclick = function() {
	hidElem.classList.toggle('mask-hidden')
	menuElem.classList.toggle('open');
	};
};

