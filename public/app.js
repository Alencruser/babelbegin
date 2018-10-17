'use strict';

var table = [];
var name = 'Père Noël !';
document.getElementById('start').addEventListener('click', function () {
	if (document.getElementById('in').value == '') {
		table.push(name);
		document.getElementById('history').innerHTML = '*** "Bonjour ' + name + ' !"***';
	} else {
		var spec = document.getElementById('in').value;
		table.push(spec);
		document.getElementById('phrase').innerHTML = '*** "Bonjour ' + spec + ' !"***';
	}
});
document.getElementById('see').addEventListener('click', function () {
	document.getElementById('history').innerHTML = table.join('<br>');
});
document.getElementById('searched').addEventListener('click', function () {
	document.getElementById('history').innerHTML = table.filter(function (e) {
		return e.toUpperCase().startsWith(document.getElementById('search').value.toUpperCase());
	});
});
