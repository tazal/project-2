var userName = new Array(10),
  tweetText = new Array(10),
  i;

var queue = function (tweetArray, newTweet) {
  "use strict";
  for (i = 0; i <= 9; i += 1) {
    if (i < 9) {
      tweetArray[i] = tweetArray[i + 1];
    } else {
      tweetArray[i] = newTweet;
    }
  }
};

var main = function () {
  "use strict";
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang: "en", track: ["javascript", "jslint", "jquery"] }, function (stream) {
    stream.on("data", function (tweet) {
      queue(userName, tweet.from_user);
      queue(tweetText, tweet.text);
      
      if (tweetText[9] !== undefined) {
        $("#tweet1").html("<h4>" + userName[9] + "</h4>" + "<p>" + tweetText[9] + "</p>");
        /*$("#tweet1").fadeIn("slow",function () {
          $("#tweet1").hide();
        });*/
      }

      if (tweetText[8] !== undefined) {
        $("#tweet2").html("<h4>" + userName[8] + "</h4>" + "<p>" + tweetText[8] + "</p>");
      }

      if (tweetText[7] !== undefined) {
        $("#tweet3").html("<h4>" + userName[7] + "</h4>" + "<p>" + tweetText[7] + "</p>");
      }

      if (tweetText[6] !== undefined) {
        $("#tweet4").html("<h4>" + userName[6] + "</h4>" + "<p>" + tweetText[6] + "</p>");
      }

      if (tweetText[5] !== undefined) {
        $("#tweet5").html("<h4>" + userName[5] + "</h4>" + "<p>" + tweetText[5] + "</p>");
      }

      if (tweetText[4] !== undefined) {
        $("#tweet6").html("<h4>" + userName[4] + "</h4>" + "<p>" + tweetText[4] + "</p>");
      }

      if (tweetText[3] !== undefined) {
        $("#tweet7").html("<h4>" + userName[3] + "</h4>" + "<p>" + tweetText[3] + "</p>");
      }

      if (tweetText[2] !== undefined) {
        $("#tweet8").html("<h4>" + userName[2] + "</h4>" + "<p>" + tweetText[2] + "</p>");
      }

      if (tweetText[1] !== undefined) {
        $("#tweet9").html("<h4>" + userName[1] + "</h4>" + "<p>" + tweetText[1] + "</p>");
      }

      if (tweetText[0] !== undefined) {
        $("#tweet10").html("<h4>" + userName[0] + "</h4>" + "<p>" + tweetText[0] + "</p>");
        /*$("#tweet10").fadeOut("slow", function () {
          $("#tweet10").show();
        });*/
      }
    });
  });
};

$(document).ready(main);