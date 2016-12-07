function footer() {
  $("body").append("<div id='footer'>")
  $("#footer").css({
    "height": "59px",
    "width": $('body').width(),
    "position": "absolute",
    "bottom": "0",
    "background-color": "grey",
    "border-top": "1px solid black"
  })
}

function madeBy() {
  $("#footer").append("<div id=footerText> <p>i made this</p>")
  $("#footerText").css({
    "position":"absolute",
    "right": 0,
    "text-transform": "capitalize"
  })
}
