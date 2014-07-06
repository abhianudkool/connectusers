// $(document).ready(function(){
// 	alert("hello world tondu");

// });

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	alert(message.message);
});