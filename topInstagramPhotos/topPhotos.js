// 1. homework: load first page of instagram photos
// 2. have to load/go through x amount of photo pages to find most liked photos
// 3. sort instagram photos by like count
// 4. create canvas to display images in
// 5. create landing page
// 6. uncache the loading spinner



$(document).ready(function(){
	var opts = {
	  lines: 20, // The number of lines to draw
	  length: 80, // The length of each line
	  width: 20, // The line thickness
	  radius: 43, // The radius of the inner circle
	  scale: 0.55, // Scales overall size of the spinner
	  corners: 1, // Corner roundness (0..1)
	  color: '#3038ff', // CSS color or array of colors
	  fadeColor: 'transparent', // CSS color or array of colors
	  opacity: 0, // Opacity of the lines
	  rotate: 0, // The rotation offset
	  direction: 1, // 1: clockwise, -1: counterclockwise
	  speed: 1, // Rounds per second
	  trail: 60, // Afterglow percentage
	  fps: 20, // Frames per second when using setTimeout() as a fallback in IE 9
	  zIndex: 2e9, // The z-index (defaults to 2000000000)
	  className: 'spinner', // The CSS class to assign to the spinner
	  top: '50%', // Top position relative to parent
	  left: '50%', // Left position relative to parent
	  shadow: 'none', // Box-shadow for the lines
	  position: 'absolute' // Element positioning
	};
	var hash = getHashValue('access_token');
	var target = document.getElementById('spinner');
	var spinner = new Spinner(opts).spin(target);

	// $("#login").hide();
	

	if( hash == null) {
		 $("#login").show();
		 $("#spinner").hide();
	}
	else { 
		$("#login").hide();

	}	
	console.log(hash);

	var api_url = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+hash;
	json_response = $.get(api_url, function(data){
		for (i=0; i < data["data"].length; i++) {
			$("#images").append('<img src="'+data["data"][i]["images"]["standard_resolution"]["url"]+'"></img>');
		}
	});
	console.log("done");
	$("#spinner").hide();
});



function getHashValue(key) {
  var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
  return matches ? matches[1] : null;
}
