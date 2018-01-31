$(document).ready(function(){
  // title.fadeOut();
  console.log("page is loaded");
  var word = $(".word");
  var we = $("#we");
  var love = $("#love");
  var code = $("#code");
  var beautiful= $("#beautiful");
  word.fadeOut("slow", "swing");
  we.fadeIn("slow", "swing");
  love.fadeIn("slow", "swing");
  beautiful.fadeIn("slow", "swing");
  code.fadeIn("slow", "swing");

  $(".word").css("color", "rgb(192, 30, 201)");
})