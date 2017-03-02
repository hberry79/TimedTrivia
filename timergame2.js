  var rightAnswers = [];
  var wrongAnswers = [];
  var unansweredQuestions = [];
  var remainingQuestions = [{
    q: "what is the color of the moon?",
    answer: ["Gray", "Blue", "Red", "Green"]
  }, {
    q: "where does batman live?",
    answer: ["Gotham", "New York", "LA", "Atlanta"]
  }, {
    q: "what is 2 + 2?",
    answer: ["4", "7", "8", "12"]
  }, {
    q: "what is the microsoft logo?",
    answer: ["window", "f", "mermaid", "triangle"]
  }, {
    q: "what is the shape of a wheel?",
    answer: ["circle", "square", "hexagon", "rectangle"]
  }];

  function popQuestions() {

    for (var i = 0; i < remainingQuestions.length; i++) {
      remainingQuestions.pop();
      console.log(remainingQuestions);

    }



  }
  popQuestions();