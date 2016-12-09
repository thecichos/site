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
    $('#header').append('<input type="button" onclick="login()" value="login">')

    ///////////////////////////
    //containers
    ///////////////////////////

    $("body").append("<div id='leftContainer'>")
    $("#leftContainer").css({
        "float": "left",
        "width": (($("body").width() / 100) * 25) - 2,
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

    $(window).resize(function(event) {
      $("#mainContainer").css({
          "height": $('body').height() - 120,
          "width": $('body').width() - $('#leftContainer').width() - 1,
          "position": "absolute",
          "right": 0,
          "top": "60px",
          "background-color": "white"
      })
      $("#leftContainer").css({
          "float": "left",
          "width": (($("body").width() / 100) * 25) - 2,
          "height": $('body').height() - 120,
          "background-color": "white",
          "position": "absolute",
          "top": "60px",
          "border-right": "1px solid black"
      })
      change()
    });

    ///////////////////////////
    //menu
    ///////////////////////////

    var menupoints = [
        ["stuff", true],
        ["pictures of cats", false],
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
    $('#menu').children().each(function(index) {
        $(this).css({
            "list-style-type": "none",
            "transition": "all 0.3s",
            "padding-top": "10px",
            "padding-bottom": "10px",
            "padding-right": "60px",
            "padding-left": "60px",
            "position": "absolute",
            "top": 40 + (index * 60),
            "left": "-2px",
            "border": "1px solid black",
            "width": "45%"
        })
    });
    $(".chosen").css({
      "background-color": "rgba(0,0,0,0.2)",
      "width": "50%",
      "box-shadow": "2px 2px 2px black"
    })
    $('#menu').children().mouseenter(function() {
        if ($(this).attr("class") == "chosen") {
            $(this).css({
                "width": "51%",
                "box-shadow": "2px 2px 2px black"
            })
        } else {
            $(this).css({
                "width": "46%",
                "box-shadow": "2px 2px 2px black"
            })
        }
    });
    $('#menu').children().mouseleave(function() {
      console.log($(this));
        if ($(this).attr("class") == "chosen") {
          $(this).css({
              "width": "50%",
              "box-shadow": "2px 2px 2px black"
          })
        } else {
            $(this).css({
                "width": "45%",
                "box-shadow": "0px 0px 0px black"
            })
        }
    });
    $("#menu").children().click(function() {
      if ($(this).attr("class") != "chosen") {
        $('.chosen').toggleClass('chosen');
        $(this).toggleClass('chosen');
        change()
      }
    })

    function change() {
      $('#menu').children().each(function() {
        if ($(this).attr("class") == "chosen") {
          $(this).css({
              "background-color": "rgba(0,0,0,0.2)",
              "width": "50%",
              "box-shadow": "2px 2px 2px black"
          })
        }
        else {
          $(this).css({
              "background-color": "white",
              "width": "45%",
              "box-shadow": "0px 0px 0px black"
          })
        }
      });
    }

    ///////////////////////////
    //footer
    ///////////////////////////
    $("body").append("<div id='footer'>")
    $("#footer").css({
        "height": "59px",
        "width": "100%",
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

change()
