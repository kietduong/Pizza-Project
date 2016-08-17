var pigLatin = function(preSentence) {
  return false;
}

$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var preSentence = $("input#pre-sentence").val();
    var result = pigLatin(preSentence);

    $(".post-sentence").text(result);
  });
});
