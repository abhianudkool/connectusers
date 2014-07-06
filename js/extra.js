$(document).ready(function(){
	chrome.extension.sendMessage({
            type: "msg"
    },function(res){
    	alert(res);
    });
});