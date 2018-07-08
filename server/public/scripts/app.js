function renderTweets(tweets) {
  for (const tweet of tweets) {
    $("#all-tweets").append(createTweetElement(tweet));
  }
}

const createTweetElement = tweetObj => {
  const $article = $("<article>").addClass("tweet");
  $article.data("tweet-id", tweetObj._id);
  const $header = $("<header>").addClass("clearfix");
  $("<img>")
    .attr("src", tweetObj.user.avatars.small)
    .appendTo($header);
  $("<h3>")
    .text(tweetObj.user.name)
    .appendTo($header);
  $("<h4>")
    .text(tweetObj.user.handle)
    .appendTo($header);
  $article.append($header);

  $("<div>")
    .addClass("content")
    .text(tweetObj.content.text)
    .appendTo($article);

  const $footer = $("<footer>").addClass("clearfix");
  $("<p>")
    .addClass("time-stamp")
    .text(moment(tweetObj.created_at).fromNow())
    .appendTo($footer);
  const $icons = $("<div>").addClass("icons");
  $("<i>")
    .addClass("fas fa-flag")
    .appendTo($icons);
  $("<i>")
    .addClass("fas fa-heart")
    .appendTo($icons);
  $("<i>")
    .addClass("fas fa-retweet")
    .appendTo($icons);
  $($footer).append($icons);
  $article.append($footer);
  return $article;
};

const loadTweets = () => {
  $.ajax({
    url: "/tweets",
    method: "get",
    dataType: "json"
  })
    .done(tweets => {
      renderTweets(tweets);
    })
    .fail(error => {
      console.log(error.responseText);
    });
};

$(function() {
  loadTweets();
  $(".new-tweet form").on("submit", function(e) {
    e.preventDefault();
    const formData = $(e.target).serialize();
    $.ajax({
      url: "/tweets",
      data: formData,
      method: "post"
    })
      .done(tweet => {
        console.log("Tweet posted!", tweet);
        $("#all-tweets").prepend(createTweetElement(tweet));
      })
      .fail(error => {
        console.log(error);
      })
      .always(() => {
        console.log("Request Completed!");
      });
  });

  $(".user-actions .register-link").on("click", function(e) {
    const user = {
      email: "matt@murdoch.com",
      password: "test"
    };

    $.ajax({
      url: "/register",
      method: "post",
      data: user
    })
      .done(function(response) {
        console.log("Response: ", response);
      })
      .fail(function(error) {
        console.log(error);
      });
  });
}); // end document.ready
