$('#start').on('click', function () {
    game.start();
})

var questions = [{
    question: '6 + 3 + 7= ____ ?',
    answers: ['16', '13', '24', '25'],
    correctAnswer: '16'
}, {
    question: '36 + 23 + 17= ____ ?',
    answers: ['26', '59', '76', '40'],
    correctAnswer: '76'
}, {
    question: '126 + 23 + 17= ____ ?',
    answers: ['266', '200', '186', '166'],
    correctAnswer: '166'
}, {
    question: '8 + 2 + 5= ____ ?',
    answers: ['15', '20', '16', '14'],
    correctAnswer: '15'
}, {
    question: '38 + 22 + 75= ____ ?',
    answers: ['155', '135', '132', '129'],
    correctAnswer: '135'
}, {
    question: '18 + 62 + 85= ____ ?',
    answers: ['8', '154', '165', '188'],
    correctAnswer: '165'
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();

        }
    },
    start: function () {
    	timer = setInterval(game.countdown, (1000 * 60)) / (1000 * 60);
  	
        $('#subWrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> minutes </h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subWrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('#subWrapper').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
    },
    done: function () {
        $.each($('input[name="question-0"]:checked'),
            function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
        });
        $.each($('input[name="question-1"]:checked'),
            function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-2"]:checked'),
            function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-3"]:checked'),
            function () {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-4"]:checked'),
            function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        $.each($('input[name="question-5"]:checked'),
            function () {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
        this.result();

        },
    result: function () {
        clearInterval(timer);
        $('#subWrapper h2').remove();
        $('#subWrapper').append("<h3>QUIZ OVER!</h3>");
        $('#subWrapper').append("<h3>Correct Answers:" + this.correct + "</h3>");
        $('#subWrapper').append("<h3>Incorrect Answers:" + this.incorrect + "</h3>");
        $('#subWrapper').append("<h3>Unanswerd:" + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }

}