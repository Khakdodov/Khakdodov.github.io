document.getElementById('browser_version').addEventListener('click', function(){

    var userAgent = navigator.userAgent;
    var browser, version, language;
    if(~userAgent.indexOf(' Chrome/')) {
    	if(~userAgent.indexOf(' OPR/')) {
    		browser = 'Opera';
    		version = userAgent.split(' OPR/')[1];
    	} else {
    		browser = 'Google Chrome';
    		version = userAgent.split(' Chrome/')[1].split(' ')[0];
    	}
    }
    if(~userAgent.indexOf(' Firefox/')) {
    	browser = 'Mozilla Firefox';
    	version = userAgent.split(' Firefox/')[1];
    }
    if(~userAgent.indexOf(' MSIE ')) {
    	browser = 'Internet Explorer';
    	version = userAgent.split(' MSIE ')[1].split(';')[0];
    }
	if(~navigator.language.indexOf('en')) {
		language = 'Английский';
	}
	if(~navigator.language.indexOf('ru')) {
		language = 'Русский';
	}
    alert(browser+' '+version+' ' +language);
});

var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert("That was really slow!");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}