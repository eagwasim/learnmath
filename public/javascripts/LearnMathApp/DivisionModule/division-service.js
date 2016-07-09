/**
 * Created by emmanuel on 5/21/16.
 */

app.service('DivisionService', function ($localStorage, LearnMathService) {

    this.previousQuestionStat = {};
    this.currentQuestion = {};

    this.mark = function () {

        var value1 = this.currentQuestion.valueOne;
        var value2 = this.currentQuestion.valueTwo;

        var answer = this.currentQuestion.answer;

        this.previousQuestionStat.answer = parseInt(answer);
        this.previousQuestionStat.correctAnswer = (parseInt(value1) / parseInt(value2));
        this.previousQuestionStat.correct = (parseInt(value1) / parseInt(value2)) == parseInt(answer);
        this.previousQuestionStat.valueOne = parseInt(value1);
        this.previousQuestionStat.valueTwo = parseInt(value2);

        if (this.previousQuestionStat.correct) {
            $localStorage.user.division.correct += 1;
            $localStorage.user.division.star += 1;
        } else {
            $localStorage.user.division.wrong += 1;
            $localStorage.user.division.star -= 1;
        }

        $localStorage.user.division.total += 1;

        var newValue2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.division.correct + 1) * 10);
        var tempValue = LearnMathService.generateRandomNumber(0, ($localStorage.user.division.correct + 1) * 10);

        var newValue1 = newValue2 * tempValue;

        this.currentQuestion.valueOne = newValue1;
        this.currentQuestion.valueTwo = newValue2;
        this.currentQuestion.answer = null;
    };

    this.setup = function () {
        if ($localStorage.user != undefined) {
            var division = $localStorage.user.division;
            if (division == undefined) {
                division = {
                    total: 0,
                    correct: 0,
                    wrong: 0,
                    star: 0,
                };
                $localStorage.user.division = division;
            }

            var newValue2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.division.correct + 1) * 10);
            var tempValue = LearnMathService.generateRandomNumber(0, ($localStorage.user.division.correct + 1) * 10);

            var newValue1 = newValue2 * tempValue;

            this.currentQuestion.valueOne = newValue1;
            this.currentQuestion.valueTwo = newValue2;
            this.currentQuestion.answer = null;
        }
    };


});