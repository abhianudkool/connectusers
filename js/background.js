
	var url = chrome.extension.getURL();
	var st = url.search("linkedin");
	chrome.extension.sendMessage({
            type: "backalert",message: st
        });

