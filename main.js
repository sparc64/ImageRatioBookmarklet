javascript:(function(){
	var image = document.images[0];
	
	var TARGET_RATIO = { horizontal: 0.6, vertical: 1.5 };
	
	
	if (image.complete) {
		var realHeight = image.naturalHeight;
		var	realWidth = image.naturalWidth;
		var realRatio = realWidth / realHeight;
		
		if ( realRatio === TARGET_RATIO[horizontal] || realRatio === TARGET_RATIO[vertical] ) {
			alert("PASS");
		} else {
			alert("FAIL")
		}
	} esle {
		console.log("Image error");	
	}
})();