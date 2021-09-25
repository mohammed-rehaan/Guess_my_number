'use strict';

let number = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log('Yahan Kya Dekhra Ghode 🐎🐴🏇🎠');

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);





    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';
    }

    else if (guess === number) {


        document.querySelector('.message').textContent = '🎉Correct Number';

        document.querySelector('.number').textContent = number;

        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';


        let clear = document.getElementById('gues').value = ' ';
        
    }

    else if (guess !== number) {
        if (score > 0) {
            document.querySelector('.message').textContent = guess < number ? ' 📉 Too Low' : ' 📉 Too High';

            document.querySelector('.score').textContent = --score;
        }

        else {

            document.querySelector('.message').textContent = '💙Lives Exhausted . You Lose 😢';
        }

        let clear = document.getElementById('gues').value = ' ';



    }
    // else if (guess < number) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = ' 📉 Too Low';

    //         document.querySelector('.score').textContent = --score;
    //     }

    //     else {

    //         document.querySelector('.message').textContent = '💙Lives Exhausted . You Lose 😢';
    //     }

    // }
    // else if (guess > number) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = ' 📉 Too High';

    //         document.querySelector('.score').textContent = --score;
    //     }

    //     else {

    //         document.querySelector('.message').textContent = '💙Lives Exhausted . You Lose 😢';
    //     }
    // }



});

document.querySelector('.again').addEventListener('click', function () {


    number = Math.floor(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.guess').value = ' ';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';
})