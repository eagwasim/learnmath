/**
 * Created by emmanuel on 5/21/16.
 */

app.service('SubtractionService', function ($localStorage, LearnMathService) {

    this.previousQuestionStat = {};
    this.currentQuestion = {};

    this.mark = function () {

        var value1 = this.currentQuestion.valueOne;
        var value2 = this.currentQuestion.valueTwo;

        var answer = this.currentQuestion.answer;

        this.previousQuestionStat.answer = parseInt(answer);
        this.previousQuestionStat.correctAnswer = (parseInt(value1) + parseInt(value2));
        this.previousQuestionStat.correct = (parseInt(value1) - parseInt(value2)) == parseInt(answer);
        this.previousQuestionStat.valueOne = parseInt(value1);
        this.previousQuestionStat.valueTwo = parseInt(value2);

        if (this.previousQuestionStat.correct) {
            $localStorage.user.subtraction.correct += 1;
            $localStorage.user.subtraction.star += 1;
        } else {
            $localStorage.user.subtraction.wrong += 1;
            $localStorage.user.subtraction.star -= 1;
        }

        $localStorage.user.subtraction.total += 1;

        var temp1 = LearnMathService.generateRandomNumber(0, ($localStorage.user.subtraction.correct + 1) * 100);
        var temp2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.subtraction.correct + 1) * 100);

        var newValue1 = Math.max(temp1, temp2);
        var newValue2 = Math.min(temp1, temp2);

        this.currentQuestion.valueOne = newValue1;
        this.currentQuestion.valueTwo = newValue2;
        this.currentQuestion.answer = null;
    };

    this.setup = function () {
        if ($localStorage.user != undefined) {
            var subtraction = $localStorage.user.subtraction;
            if (subtraction == undefined) {
                subtraction = {
                    total: 0,
                    correct: 0,
                    wrong: 0,
                    star: 0,
                }
                $localStorage.user.subtraction = subtraction;
            }

            var temp1 = LearnMathService.generateRandomNumber(0, ($localStorage.user.subtraction.correct + 1) * 100);
            var temp2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.subtraction.correct + 1) * 100);

            var newValue1 = Math.max(temp1, temp2);
            var newValue2 = Math.min(temp1, temp2);

            this.currentQuestion.valueOne = newValue1;
            this.currentQuestion.valueTwo = newValue2;
            this.currentQuestion.answer = null;
        }
    };


});