var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();

  $("#tag").val("Enter a tag here!");

  $("#submit").click(function () {
    $("#after-submit .tracking h3").append( $("#tag").val() );

    $("#before-submit").fadeOut(500, function () {
      $("#after-submit").fadeIn(500);
    });
    twitter.stream("statuses/filter", { lang: "en", track: $("#tag").val() }, function (stream) {
      stream.on("data", function (tweet) {
        $(".jcarousel").jcarousel({
          "vertical": true
        }).jcarouselAutoscroll({
          "interval": 900
        });
        $(".jcarousel ul").append("<li> <h4>" + tweet.from_user + "</h4>" + "<p>" + tweet.text + "</p> </li>");
        $(".jcarousel").jcarousel('reload');
      });
    });
  });
};

$(document).ready(main);