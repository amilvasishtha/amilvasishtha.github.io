$(document).ready(function(){
  $.getJSON("http://content.guardianapis.com/search?show-fields=trailText&q=section=uk-news&api-key=test", function(data){
    for (i=0; i<10 ;i++) {
  $("#uk-news").append('<li> <a data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" href="' + data.response.results[i].webUrl + '"">' + data.response.results[i].webTitle + '</a>' + '</li>');    console.log(data);
    }
  });

$.getJSON("http://content.guardianapis.com/search?show-fields=trailText&q=section=sport&api-key=test", function(data){
    for (i=0; i<10 ;i++) {
  $("#sport").append('<li><a data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" href="' + data.response.results[i].webUrl + '"">' + data.response.results[i].webTitle + '</a>' + '</li>');
    console.log(data);
    }
  });

$.getJSON("http://content.guardianapis.com/search?show-fields=trailText&q=section=travel&api-key=test", function(data){
    for (i=0; i<10 ;i++) {
  $("#travel").append('<li><a data-toggle="tooltip" title="' + data.response.results[i].fields.trailText + '" href="' + data.response.results[i].webUrl + '"">' + data.response.results[i].webTitle + '</a>' + '</li>');
    console.log(data);
    }
  });

});


// $(document).ready(function(){
//   $(".links").click(function() {
//     var link = $(this).attr("href");
//     $("#myiframe").attr("src", link );
//   });
// });

// // $(document).ready(function(){
// //     $("#uk-news").click(function(e) {
// //         e.preventDefault();

// //         $("#myiframe").attr("src", $(this).attr("href"));
// //     })
// // });

// // $("a").click(function(e) {
// //   e.preventDefault();
// //   $("#myiframe").attr("src", $(this).attr("href"));
// //   $("a").removeClass("active");
// //   $(this).addClass("active");
// // });
