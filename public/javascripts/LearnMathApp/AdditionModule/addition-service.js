/**
 * Created by emmanuel on 5/21/16.
 */

app.service('AdditionService', function ($localStorage, LearnMathService) {

    this.previousQuestionStat = {};
    this.currentQuestion = {};

    this.mark = function () {

        var value1 = this.currentQuestion.valueOne;
        var value2 = this.currentQuestion.valueTwo;

        var answer = this.currentQuestion.answer;

        this.previousQuestionStat.answer = parseInt(answer);
        this.previousQuestionStat.correctAnswer = (parseInt(value1) + parseInt(value2));
        this.previousQuestionStat.correct = (parseInt(value1) + parseInt(value2)) == parseInt(answer);
        this.previousQuestionStat.valueOne = parseInt(value1);
        this.previousQuestionStat.valueTwo = parseInt(value2);

        if (this.previousQuestionStat.correct) {
            $localStorage.user.addition.correct += 1;
            $localStorage.user.addition.star += 1;
        } else {
            $localStorage.user.addition.wrong += 1;
            $localStorage.user.addition.star -= 1;
        }

        $localStorage.user.addition.total += 1;

        var newValue1 = LearnMathService.generateRandomNumber(0, ($localStorage.user.addition.correct + 1) * 100);
        var newValue2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.addition.correct + 1) * 100);

        this.currentQuestion.valueOne = newValue1;
        this.currentQuestion.valueTwo = newValue2;
        this.currentQuestion.answer = null;
    };

    this.setup = function () {
        if ($localStorage.user != undefined) {
            var addition = $localStorage.user.addition;
            if (addition == undefined) {
                addition = {
                    total: 0,
                    correct: 0,
                    wrong: 0,
                    star: 0,
                }
                $localStorage.user.addition = addition;
            }

            var newValue1 = LearnMathService.generateRandomNumber(0, ($localStorage.user.addition.correct + 1) * 100);
            var newValue2 = LearnMathService.generateRandomNumber(0, ($localStorage.user.addition.correct + 1) * 100);

            this.currentQuestion.valueOne = newValue1;
            this.currentQuestion.valueTwo = newValue2;
            this.currentQuestion.answer = null;
        }
    };
});