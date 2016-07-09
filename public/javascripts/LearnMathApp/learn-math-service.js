/**
 * Created by emmanuel on 5/22/16.
 */

app.service('LearnMathService', function ($log) {
    var starNeg = {
        name: 'Negative Star',
        description: 'You are doing poorly your star is below 0, try harder to get a brighter star',
        star: '#FF3939'
    };

    var star0 = {
        name: 'Beginner',
        description: 'Your journey has just begun! shoot for a brighter star!',
        star: '#EEEEEE'
    };

    var star50 = {
        name: 'Padawan',
        description: 'You have more than 50 points in the bag! you are less than 50 points away from the next star!',
        star: '#FFCD80'
    };

    var star100 = {
        name: 'Armature',
        description: 'Wow! 100 points! you are still an armature though. come on! lets get at least 100 more points',
        star: '#FCFF00'
    };

    var star200 = {
        name: 'Jedi',
        description: 'Your are setting a new record. Push further little Jedi',
        star: '#63FF00'
    };

    var star400 = {
        name: 'Jedi Knight',
        description: 'Your are setting a new record. Push further little Jedi',
        star: '#00FDFF'
    };

    var star650 = {
        name: 'Jedi Master',
        description: 'You are pushing the boundaries of human possibilities! MASTER!',
        star: '#0037FF'
    };

    var star1000 = {
        name: 'Jedi Grand Master',
        description: 'The World is yours now!',
        star: '#FF00B6'
    };

    var star2000 = {
        name: 'Lord Modor',
        description: 'The universe is can no longer contain you',
        star: '#B300FF'
    };

    var stars = [starNeg, star0, star50, star100, star200, star400, star650, star1000, star2000];

    this.stars = function () {
        return stars;
    };

    this.getStar = function (score) {

        $log.info(score);

        if (score == undefined) {
            return star0;
        }



        if (score < 0) {
            return starNeg;
        }

        if (score >= 0 && score < 10) {
            return star0;
        }

        if (score >= 10 && score < 20) {
            $log.info('Returning score for greater than 10');
            return star50;
        }

        if (score >= 20 && score < 30) {
            return star100;
        }

        if (score >= 30 && score < 40) {
            return star200;
        }

        if (score >= 40 && score < 50) {
            return star400;
        }

        if (score >= 50 && score < 60) {
            return star650;
        }

        if (score >= 60 && score < 70) {
            return star1000;
        }

        if (score >= 70) {
            return star2000;
        }
    };

    this.generateRandomNumber = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
});