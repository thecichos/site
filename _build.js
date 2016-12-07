$(document).ready(function() {
    $("head").append("<script src='_functions.js'>")
    $("head").append("<script src='_write.js'>")
    $("html").css({
        "height": "100%",
        "width": "100%",
        "margin": "0"
    })
    $("body").css({
        "height": "100%",
        "width": "100%",
        "margin": "0"
    })
    $('*').css({
        "user-select": "none"
    })

    ///////////////////////////
    //header
    ///////////////////////////
    $("body").append("<div id='header'>")
    $("#header").css({
        "height": "59px",
        "width": "100%",
        "position": "absolute",
        "top": "0",
        "background-color": "white",
        "border-bottom": "1px solid black"
    })

    ///////////////////////////
    //containers
    ///////////////////////////

    $("body").append("<div id='leftContainer'>")
    $("#leftContainer").css({
        "float": "left",
        "width": (($("body").width() / 100) * 15) - 2,
        "height": $('body').height() - 120,
        "background-color": "white",
        "position": "absolute",
        "top": "60px",
        "border-right": "1px solid black"
    })

    $('body').append("<div id=mainContainer>")
    $("#mainContainer").css({
        "height": $('body').height() - 120,
        "width": $('body').width() - $('#leftContainer').width() - 1,
        "position": "absolute",
        "right": 0,
        "top": "60px",
        "background-color": "white"
    })

    ///////////////////////////
    //menu
    ///////////////////////////

    var menupoints = [
        ["main", true],
        ["sub", false],
        ["sub", false],
        ["sub", false],
        ["sub", false]
    ]
    $('#leftContainer').append('<ul id="menu">')
    for (var i = 0; i < menupoints.length; i++) {
        if (menupoints[i][1] == true) {
            $("#menu").append('<li>' + menupoints[i][0])
            $("#menu").children().attr('class', "chosen");
        } else {
            $("#menu").append('<li>' + menupoints[i][0])
        }

    }
    var x = 0
    $('#menu').children().each(function() {
        $(this).css({
            "list-style-type": "none",
            "transition": "all 0.3s cubic-bezier(0.42, 0, 1, -0.15)",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-right": "60px",
            "padding-left": "60px",
            "position": "absolute",
            "top": 40 + (x * 60),
            "left": "-2px",
            "border": "1px solid black",
            "width": "25px"
        })
        x++
    });
    $('#menu').children().mouseenter(function() {
      console.log($(this).attr("class"));
        if ($(this).attr("class") == "chosen") {
            $(this).css({
                "width": "50px",
                "box-shadow": "2px 2px 2px black"
            })
        } else {
            $(this).css({
                "width": "45px",
                "box-shadow": "2px 2px 2px black"
            })
        }
    });
    $('#menu').children().mouseleave(function() {
      console.log($(this).attr("class"));
        if ($(this).attr("class") == "chosen") {
          $(this).css({
              "width": "50px",
              "box-shadow": "2px 2px 2px black"
          })
        } else {
            $(this).css({
                "width": "25px",
                "box-shadow": "0px 0px 0px black"
            })
        }
    });
    $('.chosen').siblings().click(function() {
      console.log($(this));
        $('.chosen').toggleClass('chosen');
        $(this).toggleClass('chosen');
        change()
    });

    ///////////////////////////
    //footer
    ///////////////////////////
    $("body").append("<div id='footer'>")
    $("#footer").css({
        "height": "59px",
        "width": $('body').width(),
        "position": "absolute",
        "bottom": "0",
        "background-color": "white",
        "border-top": "1px solid black"
    })

    $("#footer").append("<div id=footerText> <p>i made this</p>")
    $("#footerText").css({
        "position": "absolute",
        "right": 0,
        "text-transform": "capitalize"
    })
})

function change() {
  $('#menu').children().each(function() {
    if ($(this).attr("class") == "chosen") {
      $(this).css({
          "background-color": "rgba(0,0,0,0.2)",
          "width": "50px",
          "box-shadow": "2px 2px 2px black"
      })
    }
    else {
      $(this).css({
          "background-color": "white",
          "width": "25px"
      })
    }
  });
}
