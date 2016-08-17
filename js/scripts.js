var pigLatin = function(preSentence) {
  if (preSentence === "a" || preSentence === "e" || preSentence === "i" || preSentence === "o" || preSentence ===  "u") {
    return preSentence + "ay";
  } else if (preSentence !== "a", "e", "i", "o", "u") {
    return false;

  } else {
    return false;
  }
}

$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var preSentence = $("input#pre-sentence").val();
    var result = pigLatin(preSentence);

    $(".post-sentence").text(result);
  });
});
