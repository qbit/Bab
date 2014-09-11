
function inject( file ) {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(file);
	console.log('injecting %s', file);
	(document.head||document.documentElement).appendChild(s);
}

os = document.createElement('script'), 
o = 'var bab.js';

inject('bab.js');

(document.head||document.documentElement).appendChild(os);