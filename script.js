$(document).ready(function() {
  // var $title = $("#title");

  // $title.fadeOut();
  console.log("page is loaded");
  // $(".word").hide();
  $(".unwantedWord").fadeTo(2500,.2);
  $("#we").show();
  $("#love").show();
  $("#to").show();
  $("#code").show();

  $(".word").css("color","blue");
  $(".unwantedWord").css("color","blue");


  $(".word").fadeOut(1200);
  $(".word").fadeIn(1200);

})