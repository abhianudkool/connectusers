
	// var url = chrome.extension.getURL();
	// var st = url.search("linkedin");
	// chrome.extension.sendMessage({
 //            type: "backalert",message: st
 //        });

$(document).ready(function(){
	// chrome.tabs.onCreated.addListener(function(){
	// 	// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	// 	//     // chrome.tabs.sendMessage(tabs[0].id, {type: "open_dialog_box"}, function(response) {});
	// 	//     alert(tabs[0].id);  
	// 	// });

	// });

	// chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {          
	//    if (changeInfo.status == 'complete') {   
	//       chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	//          chrome.tabs.sendMessage(tabs[0].id, {action: "SendIt"}, function(response) {});  
	//       });
	//    }
	// });

	// chrome.tabs.query({currentWindow: true}, function(tabs){
	// 	    // chrome.tabs.sendMessage(tabs[0].id, {type: "open_dialog_box"}, function(response) {});
	// 	    var i;
	// 	    for(i in tabs){
	// 	    	// alert(tabs[i].url);
	// 	    	var st = tabs[i].url.search("linkedin");
	// 	    	if(st>=0){
	// 	    		alert(tabs[i].url);	
	// 	    		chrome.tabs.sendMessage(tabs[0].id, {type: "open_dialog_box"}, function(response) {});
	// 	    	}
		    	
	// 	    }
	// 	    // alert(tabs[0].id);  
	// 	});
});

