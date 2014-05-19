// Foundation 5 Activate! 
$(document).foundation();


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts

  $('.gallery').magnificPopup({
		  delegate: 'a', 
		  type: 'image',
		  gallery: {enabled: true}
  
	});
});
