$(document).ready(function(){


$(document).on("click", "a", function() {
var link = $(this).attr("linkid");
$("#myiframe").attr("src", link);
});

  
  $.getJSON("http://content.guardianapis.com/search?section=uk-news&order-by=newest&show-fields=body%2CtrailText&page-size=10&api-key=yht9jzt3ccngxwgyknvfaj89", function(data){
    for (i=0; i<10 ;i++) {
      $("#uk-news").append('<li><a href="#" class="links" data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" linkid="' + data.response.results[i].webUrl + '">' + data.response.results[i].webTitle + '</a>' + '</li>')
      //console.log(data);
    }
  });

$.getJSON("http://content.guardianapis.com/search?section=sport&order-by=newest&show-fields=body%2CtrailText&page-size=10&api-key=yht9jzt3ccngxwgyknvfaj89", function(data){
    for (i=0; i<10 ;i++) {
  $("#sport").append('<li><a href="#" class="links" data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" linkid="' + data.response.results[i].webUrl + '">' + data.response.results[i].webTitle + '</a>' + '</li>')
    //console.log(data);
    }
  });

$.getJSON("http://content.guardianapis.com/search?section=travel&order-by=newest&show-fields=body%2CtrailText&page-size=10&api-key=yht9jzt3ccngxwgyknvfaj89", function(data){
    for (i=0; i<10 ;i++) {
  $("#travel").append('<li><a href="#" class="links" data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" linkid="' + data.response.results[i].webUrl + '">' + data.response.results[i].webTitle + '</a>' + '</li>')
   // console.log(data);
    }
  });

// render tag function - dry code
// remember to indent code
});