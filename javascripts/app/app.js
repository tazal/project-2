var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang: "en", track: ["javascript", "jslint", "jquery"] }, function (stream) {
    stream.on("data", function (tweet) {
      $(".jcarousel").jcarousel({
        "vertical": null,
      })
      .jcarouselAutoscroll({
        "interval": 900
      });
      $(".jcarousel ul").append("<li> <h4>" + tweet.from_user + "</h4>" + "<p>" + tweet.text + "</p> </li>");
      $(".jcarousel").jcarousel('reload');
    });
  });
};

$(document).ready(main);