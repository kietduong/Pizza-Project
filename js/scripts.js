var pigLatin = function(preSentence) {
  if ((preSentence === "a") || (preSentence === "e") || (preSentence === "i") || (preSentence === "o") || (preSentence ===  "u")) {
    return preSentence + "ay";
  } else if ((preSentence === "A") || (preSentence === "E") || (preSentence === "I") || (preSentence === "O") || (preSentence === "U")) {
    return preSentence + "ay";
  } else if ((preSentence !== "a") || (preSentence !== "e") || (preSentence !== "i") || (preSentence !== "o") || (preSentence !==  "u")) {
    return false;
    console.log("not a vowel");
  } else {
    return false;
    console.log("not a character");
  }
};

$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var preSentence = $("input#pre-sentence").val();
    var result = pigLatin(preSentence);

    $(".post-sentence").text(result);
  });
});
