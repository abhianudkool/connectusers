	var datObj = {};
	var key = "abc";
	var value = 12;
	var key1 = "abcd";
	var value1 = 123;
	datObj[key]=value;
	datObj[key1]=value1;
	chrome.storage.local.set(datObj, function() { alert("Success!");console.log("Success"); });

	chrome.storage.local.get(null,function(obj){
		var key;
		for(key in obj){
			alert(obj[key]);
		}
	});
