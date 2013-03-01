/*global window*/
(function () {
  "use strict";
  var $ = window.$,
    document = window.document,
    ctwitter = window.ctwitter,
    main = function () {
      var twitter = new ctwitter.CTwitter(),
        userInput;

      $("#submit").click(function () {
        userInput = $("#tag").val();
        $("#after-submit .tracking h3").append(userInput);

        $("#before-submit").fadeOut(500, function () {
          $("#after-submit").fadeIn(500);
        });
        twitter.stream("statuses/filter", { lang: "en", track: userInput}, function (stream) {
          stream.on("data", function (tweet) {
            $(".jcarousel").jcarousel({
              "vertical": true
            }).jcarouselAutoscroll({
              "interval": 900
            });
            $(".jcarousel ul").append("<li> <h4>" + tweet.from_user + "</h4>" + "<p>" + tweet.text + " </p> </li>");
            $(".jcarousel").jcarousel('reload');
          });
        });
      });
    };

  $(document).ready(main);

}());