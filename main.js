javascript:(function(){
	var image = document.images[0];
	
	var TARGET_RATIO = {"horizontal":0.6,"vertical": 1.5};
	
	
	if (image.complete) {
		var realHeight = image.naturalHeight;
		var realWidth = image.naturalWidth;
		var realRatio = realHeight / realWidth;
		
		if ( realRatio === TARGET_RATIO["horizontal"] || realRatio === TARGET_RATIO["vertical"] ) {
			var resultMessage = "PASS";
		} else {
			resultMessage = "FAIL";
		}
		
		alert(resultMessage + " " + (realRatio > 1 ? "(3 : 2)" : "(5 : 3)") + "\n\nRatio: " + realRatio + "\nResolution: " + realHeight + " x " + realWidth);
	} else {
		console.log("Image error");	
	}
})();