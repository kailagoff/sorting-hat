var houseFlip = function(choice, result) {
  if (result === 'slytherin' && choice === 'gryffindor') {
    return "hufflepuff";
  } else if (result === 'gryffindor' && choice === 'slytherin') {
    return "ravenclaw";
  } else {
    return result;
  }
}


var house = function(q1, q2, q3, q4, q5) {
  var gryff = 0;
  var sly = 0;
  var huffle = 0;
  var raven = 0;

  answers = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  variables = [gryff, sly, huffle, raven];
  for (var i = 0;i < answers.length;i++) {
    if (q1 === answers[i]) {
      variables[i]++
      if (q2 === answers[i]) {
        variables[i]++
        if (q3 === answers[i]) {
          variables[i]++
          if (q4 === answers[i]) {
            variables[i]++
            if (q5 === answers[i]) {
              variables[i]++
            }
          }
        }
      }
    }
  }

  return variables;

}
var findHighestIndex = function(arr) {
  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

var sort = "";

$(document).ready(function() {
  $("form#hat").submit(function(event) {
    event.preventDefault();

    sort = $("select#hatQuestion").val();

    $(".sortingHat").hide();
    $(".houseQuiz").show();

  });


  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();


    var houseRes = house(question1, question2, question3, question4, question5);
    var result = findHighestIndex(houseRes);
    if (result === 0 ) {
      var flipResult = houseFlip(sort, "gryffindor")
      $("#hatResult").show();
      $("#response").text(flipResult);
    } else if (result === 1) {
      var flipResult = houseFlip(sort, "slytherin")
      $("#hatResult").show();
      $("#response").text(flipResult);
    } else if (result === 2) {
      var flipResult = houseFlip(sort, "hufflepuff")
      $("#hatResult").show();
      $("#response").text(flipResult);
    } else if (result === 3) {
      var flipResult = houseFlip(sort, "ravenclaw")
      $("#hatResult").show();
      $("#response").text(flipResult);
    }


  });
});
