$(document).ready(function(){
	$.getJSON("https://api.twitter.com/1.1/statuses/mentions_timeline.json", function(data){
    	console.log('statuses[0]'); 
    for (i=0; i<10 ;i++) {
  	$(".tweet").append('statuses[0]');

  }});
});



$getJSON(/stream)