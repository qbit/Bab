// This chagnes when the extension is loaded - need to 
// either publish so it's static - or figure out how to
// grab it dynamically.
var eid = "capjacobdbdflmejpmdjcmbjbfjckfhe";

window.alert = function(a) {
  // This will only exist on a page that is listed in the 
  // manifest.json file under the externally_connectable
  // area. Need to find a way to either allow that option
  // to be externally modified.. or .. something
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage(eid, {},function() {});
  }
  console.log(a);
}