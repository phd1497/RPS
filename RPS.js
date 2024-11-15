let user_score = 0;
let computer_score = 0;
let numround = '';
let current_round = 0;
let stop_run = false;

FirstPage();
function FirstPage(){
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('rtn').style.display = 'none';
    document.getElementById('page3').style.display = 'block';
}


function playGame(userChoice) {

    if(stop_run){
        alert('Please click Play Again.');
        return;
    }
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    debugger
    let result = '';
    if (userChoice === computerChoice) {
        result = `It's a tie! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
        user_score++;
        document.getElementById('us-scr').textContent = user_score;
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
        computer_score++;
        document.getElementById('cpt-scr').textContent = computer_score;
    }
    current_round++;
    document.getElementById('result').textContent = result;
    

    if(numround != ''){
        if( current_round === numround){
            if(user_score > computer_score){
                setTimeout(function(){
                    alert("You are a winner!!!");
                },1)
                
                document.getElementById('rtn').style.display = 'block';
                stop_run = true;
                return;
            }else if(user_score < computer_score){
                
                setTimeout(function(){
                    alert("Computer is a winner!!!");
                },1)
                document.getElementById('rtn').style.display = 'block';
                stop_run = true;
                return;
            }else{
                setTimeout(function(){
                    alert("Both of you are winners!!!");
                },1)
                
                document.getElementById('rtn').style.display = 'block';
                stop_run = true;
                return;
            }
        }
    }
}

function NumberRound(num){
    debugger
    numround = num;
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'block';
    document.getElementById('page3').style.display = 'none';
    if(numround == undefined){
        document.getElementById('rtn').style.display = 'block';
    }
}

document.getElementById('rtn').addEventListener('click', () => {
    user_score = 0;
    computer_score = 0;
    numround = '';
    current_round = 0;
    stop_run = false;
    document.getElementById('us-scr').textContent = 0;
    document.getElementById('cpt-scr').textContent = 0;
    FirstPage();
});