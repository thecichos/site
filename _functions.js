function madeBy() {
  $("#footer").append("<div id=footerText> <p>i made this</p>")
  $("#footerText").css({
    "position":"absolute",
    "right": 0,
    "text-transform": "capitalize"
  })
}

function login() {
  window.location.href = "php/admin.php"
}
