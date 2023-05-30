jQuery(document).ready(function($){
	    
	$(".btnrating").on('click',(function(e) {
	
	var previous_value = $("#selected_rating").val();
	
	var selected_value = $(this).attr("data-attr");
	$("#selected_rating").val(selected_value);
	
	$(".selected-rating").empty();
	$(".selected-rating").html(selected_value);
	
	// for (i = 1; i <= selected_value; ++i) {
	// // $("#rating-star-"+i).toggleClass('rating-warning');
	// // $("#rating-star-"+i).toggleClass('_rating-selected');
  // $("#rating-star-"+i +" > i").toggleClass('fa-regular');
  // $("#rating-star-"+i +" > i").toggleClass('fa-solid');
	// }
	
	// for (ix = 1; ix <= previous_value; ++ix) {
	// // $("#rating-star-"+ix).toggleClass('btn-warning');
	// // $("#rating-star-"+ix).toggleClass('_rating-selected');
  // $("#rating-star-"+i +" > i").toggleClass('fa-regular');
  // $("#rating-star-"+i +" > i").toggleClass('fa-solid');
	// }
  
  var low = Math.min(previous_value, selected_value)+1;
  var high= Math.max(previous_value, selected_value);
  // for (i = low; i<= high; i++){
  //   $("#rating-star-"+i +" > i").toggleClass('fa-regular');
  //   $("#rating-star-"+i +" > i").toggleClass('fa-solid');
  // }
  for (i = low; i<= high; i++){
    $("#rating-star-"+i +" > i").toggle();
  }
	
	}));
	
		
});
