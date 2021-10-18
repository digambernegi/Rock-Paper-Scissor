const choose = {
    'rock': '/images/rock.png',
    'paper': '/images/paper.png',
    'scissor': './images/scissor.png'
}

let score = 0;
function check(hands){
console.log(hands);
let hand = document.querySelector('.hands');
hand.style.display='none';

let user = document.querySelector(".compete")
user.style.display="flex";

document.getElementById('userhand').src = choose[hands];
opponent();
let oppo = opponent();
refree(hands, oppo);
}

const opponent = () => {
    let hand = ['rock','paper','scissor']
    let oppo = hand[Math.floor(Math.random() * 3 )];
    
    document.getElementById('oppohand').src = choose[oppo];
    return oppo;
   
}

const refree = (userHand, oppo) => {
    if (userHand == "paper" && oppo == "scissor") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && oppo == "rock") {
        setDecision("YOU WIN!");
        setScore(score + 1);
      }
      if (userHand == "paper" && oppo == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && oppo == "scissor") {
        setDecision("YOU WIN!");
        setScore(score + 1);
      }
      if (userHand == "rock" && oppo == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && oppo == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissor" && oppo == "scissor") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissor" && oppo == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissor" && oppo == "paper") {
        setDecision("YOU WIN!");
        setScore(score + 1);
      }
    };

    const restart = () =>{
      let hand = document.querySelector('.hands');
      hand.style.display='flex';

      let user = document.querySelector(".compete")
      user.style.display="none";
    }
        const setDecision = (decision) =>{
          document.querySelector('.decision h1').innerText=decision;
            console.log(decision);
        }
        const setScore = (newscore) =>{
          score=newscore;
          document.querySelector('.scores p').innerText=score;
            console.log(score);
        }