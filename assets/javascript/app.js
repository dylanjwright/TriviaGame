$("#startButton").on("click", function(){
  game.start();
});

var questions = [{ 
  question: "What is the name of the female warehouse employee in the first few seasons?",
  answers:["Pudge", "Madge", "Marge", "Parge"],
  correctAnswer: "0b"
},{
  question: "What is the name of Pam's ex-fiance?",
  answers:["Darryl", "Madge", "Roy", "Jimbo"],
  correctAnswer: "1c"
},{
  question: "What is the name of Steve Carrell's wife's character?",
  answers:["Jan", "Holly", "Helene", "Carol"],
  correctAnswer: "2d"
} ,{
  question: "What is the name of the big red trash compactor in the warehouse?",
  answers:["Bailor", "Palette", "Forklift", "Seamonster"],
  correctAnswer: "3b"
}, {
  question: "What is the name of Jims girlfriend at the end of season 1?",
  answers:["Pudge", "Pam", "Katy", "Karen"],
  correctAnswer: "4c"
}];
  
var game = {
  correct: 0,
  wrong: 0,
  counter: 15,
  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);

    if (game.counter <= 0) {
      game.result();
      game.done();
    };
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $(".countdownDiv").prepend("<h3> Time Remaining: <span id='counter'>15</span> Seconds</h3>")
    $("button").remove();
    for (var i = 0; i < questions.length; i++) {
      
      $(".questionsCol").append("<p>"+questions[i].question+"</p>");
    
      $(".questionsCol").append("<input id=" +i+ "a value='" + i + "a' type='radio' checked name='question-" + i + "'> " +questions[i].answers[0]+ "</input>");
      $(".questionsCol").append("<input id=" +i+ "b value='" + i + "b' type='radio' name='question-" + i + "'> " +questions[i].answers[1]+ "</input>");
      $(".questionsCol").append("<input id=" +i+ "c value='" + i + "c' type='radio' name='question-" + i + "'> " +questions[i].answers[2]+ "</input>");
      $(".questionsCol").append("<input id=" +i+ "d value='" + i + "d' type='radio' name='question-" + i + "'> " +questions[i].answers[3]+ "</input>");
    
    };
  },
  done: function() {
    console.log("done is running");
    // $("input[name='question-0']").each(function() {
    //   console.log($(this).val());
    //   console.log(questions[0].answer);
    //   if ($(this).val() === questions[0].correctAnswer) {
    //     game.correct++
    //   } else {
    //     game.wrong++;
    //   }
    // });
    // $.each($("input[name='question-1']:checked"), function() {
    //   if ($(this).val() === questions[1].correctAnswer) {
    //     game.correct++
    //   } else {
    //     game.wrong++;
    //   }
    // });
    // $.each($("input[name='question-2']:checked"), function() {
    //   if ($(this).val() === questions[2].correctAnswer) {
    //     game.correct++
    //   } else {
    //     game.wrong++;
    //   }
    // });
    // $.each($("input[name='question-3']:checked"), function() {
    //   if ($(this).val() === questions[3].correctAnswer) {
    //     game.correct++
    //   } else {
    //     game.wrong++;
    //   };
    // });
    var answers = gameContainer.children("input:checked")
    console.log(answers);
    for (var i =0; i < questions.length; i++) {
     if ($(answers[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.wrong++;
      }
    }
    this.result();
  },

  result: function(){
    clearInterval(timer);

    $(".countdownDiv").remove();
    $(".questionsCol").remove();

    $(".innerWrap").html("<div></div>");
    $(".innerWrap").append("<h3> Correct Answers: " + game.correct + "</h3>");
    $(".innerWrap").append("<h3> Incorrect Answers: " + game.wrong + "</h3>");
  }
};

var gameContainer = $(".questionsCol");