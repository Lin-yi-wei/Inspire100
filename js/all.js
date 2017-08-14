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
});