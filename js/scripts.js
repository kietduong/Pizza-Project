var pigLatin = function(preSentence) {
  if ((preSentence.charAt(0) === "a") || (preSentence.charAt(0) === "e") || (preSentence.charAt(0) === "i") || (preSentence.charAt(0) === "o") || (preSentence.charAt(0) ===  "u")) {
    return preSentence + "ay";
  } else if ((preSentence.charAt(0) === "A") || (preSentence.charAt(0) === "E") || (preSentence.charAt(0) === "I") || (preSentence.charAt(0) === "O") || (preSentence.charAt(0) === "U")) {
    return preSentence + "ay";
  } else if ((preSentence.charAt(0) !== "a") || (preSentence.charAt(0) !== "e") || (preSentence.charAt(0) !== "i") || (preSentence.charAt(0) !== "o") || (preSentence.charAt(0) !==  "u")) {
    var preSentenceArray = preSentence.split("");
    var preSentenceFirstLetter = preSentenceArray.shift();
    preSentenceArray.push(preSentenceFirstLetter);
    var postSentence = preSentenceArray.join("");
    console.log(postSentence);
    return postSentence + "ay";
  } else {
    console.log("not a character");
    return preSentence;
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
