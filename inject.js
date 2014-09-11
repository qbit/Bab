
var s = document.createElement('script');
s.src = chrome.extension.getURL("bab.js");
console.log('injecting %s', "bab.js");
(document.head||document.documentElement).appendChild(s);
