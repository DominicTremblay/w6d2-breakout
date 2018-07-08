$(function() {
  const MAX_CHARS = 140;

  $("textarea").on("keyup", function(event) {
    const nbChars = $(this).val().length;
    const charsLeft = MAX_CHARS - nbChars;
    const $counter = $(this)
      .closest("form")
      .find(".counter");
    $counter.text(charsLeft);
    charsLeft < 0
      ? $($counter).css("color", "red")
      : $($counter).css("color", "black");
  });
});
