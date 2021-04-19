'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct Number!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value); */


let rand_num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function () {
    const guessed_num = Number(document.querySelector('.guess').value);
    console.log(guessed_num, typeof guessed_num);


    //no input
    if (!guessed_num) {
        document.querySelector('.message').textContent = 'no number entered...';


        // guess right
    } else if (guessed_num === rand_num) {
        document.querySelector('.message').textContent = 'correct Number!!';

        document.querySelector('.number').textContent = rand_num;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }

        //too high
    } else if (guessed_num !== rand_num) {
        if (score > 1) {
            document.querySelector('.message').textContent = guessed_num > rand_num ? 'too high...' : 'too low...';
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            document.querySelector('.message').textContent = 'game over';
            document.querySelector('.number').textContent = rand_num;
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ce3939';
        }


        //too low   
    }
    /* else if (guessed_num < rand_num) {
           if (score > 1) {

               document.querySelector('.message').textContent = 'too low...';
               score--;
               document.querySelector('.score').textContent = score;
           } else {
               document.querySelector('.message').textContent = 'game over';
               document.querySelector('.number').textContent = rand_num;
               document.querySelector('.score').textContent = 0;
               document.querySelector('body').style.backgroundColor = '#ce3939';
           } 

       }*/
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    rand_num = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';







});