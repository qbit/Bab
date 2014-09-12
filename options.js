var blocked = 0;

chrome.runtime.onMessageExternal.addListener(function() {
    console.log("blocked %d", blocked);
    blocked += 1;
    chrome.browserAction.setBadgeText( { text: blocked + ""} );
});