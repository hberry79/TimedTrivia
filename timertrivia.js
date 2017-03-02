///Timer Trivia game

//making sure the DOM is ready
$(document).ready(function() {
    ///Theme = Know your meme

    //Global vars
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var noAnswer = 0;
    var nextIndex= 0;
    var timeRemaining = 0;
    var timer;

    //hides the game until we click the start button
    $("#maingame, #endScreen").hide();
    $('#A, #B, #C').click(answerCheck);
    $("#StartButton").click(init);

    
    //store your game in an object. Here are all my questions and info needed.
    var questions = [{
            //index 0 
            question: "What is the name of this meme?",
            choices: ["A:Bad Luck Brian<br> ", "B:Nerd Face Nelson<br>", "C:Looser Face Larry"],
            image: "images/BadLuckBrian.jpg",
            answer: "A"
        },

        {
            question: "What is the signature catch phrase of this young woman?",
            choices: ["A:Don't bro me if you don't know me<br>  ", "B:Cash me ousside, how bow dat?<br>  ", "C:Boats n' hoes"],
            image: "images/CashMeOutside.jpg",
            answer: "B"
        },

        {
            question: "What would be an appropriate caption for this meme?",
            choices: ["A: Hmm.. where is my spaceship? <br>", "B: When you walk in a room and forget why you're there<br>", "C: Not sure if finding an actual bug or just a semicolan"],
            image: "images/NotSureFry.jpg",
            answer: "C"

        },
        {
            question: "What is the name of this meme?",
            choices: ["A: Spanish Senor <br>", "B: Salt Bae<br>", "C: Meat Man"],
            image: "images/salt.jpg",
            answer: "B"

        },
        {
            question: "What would be an appropriate caption for this meme?",
            choices: ["A: Thought it was Thursday, It's Friday! <br>", "B: Look at my hands...they're tiny!<br>", "C: Why you no love me?"],
            image: "images/SuccessKid.png",
            answer: "A"

        }
    ];
    function loadNextQuestion() {
    		if (questions.length === nextIndex) {
    			//game over
    			$("#maingame").hide();
	        	$("#endScreen").show();
		    }
		    else {
	        startTimer();
	        $("#photo").html("<img src ='" + questions[nextIndex].image + "'>")
	        $("#question").html(questions[nextIndex].question)
	        $("#answers").html(questions[nextIndex].choices)
    		}
    }

    // My timer -A user will have 45 seconds to select the correct answer
    function incrementTimer() {
        timer = setTimeout(function() {
            $('#time').text(timeRemaining);
            if (timeRemaining <= 0) {
                //unanswered
				noAnswer++;
                $(".noguess").html(noAnswer);
                return;
            } else {
                timeRemaining = timeRemaining - 1;
                incrementTimer();
            }
        }, 1000);
    }

    function startTimer() {
        clearTimeout(timer);
        timeRemaining = 45; // in seconds
        incrementTimer();
    }

   
    function answerCheck() {
        var userGuess = $(this).html();
      
        if (userGuess === questions[nextIndex].answer) {
            correctAnswer++;
            nextIndex++;
            console.log(nextIndex)
            $('.wins').html(correctAnswer);
            loadNextQuestion();
	        }
         else {
            wrongAnswer++;
            nextIndex++;
            $('.losses').html(wrongAnswer);
            loadNextQuestion();
        	}
    }

    //starting our game. Hiding the start screen and displaying the first Q. also starting counter.
    function init() {
        $("#startScreen").hide();
        $("#maingame").show();
        startTimer();
        $("#photo").html("<img src ='" + questions[0].image + "'>")
        $("#question").append(questions[0].question)
        $("#answers").append(questions[0].choices)
    }
});
