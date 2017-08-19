$(document).ready(function() {
 
 	$('.flexslider').flexslider({
 		animation:"slide"
       
 	});

    $(".topa").click(function(event) {
		$(".bara").slideToggle();


   });

  
  $(".topb").click(function(event) {
		$(".barb").slideToggle();


   });


 $(".topc").click(function(event) {
		$(".barc").slideToggle();


   });

$(".flex-prev").attr("title","前一張照片");
$(".flex-next").attr("title","後一張照片");

});