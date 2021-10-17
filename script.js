const choose = {
    'rock': '/images/rock.png',
    'paper': '/images/paper.png',
    'scissor': './images/scissor.png'
}


function check(hands){
console.log(hands);
let hand=document.querySelector('.hands');
hand.style.display='none';

let user = document.querySelector(".compete")
user.style.display="flex";

document.getElementById('userhand').src = choose[hands];

let result = opponent();
refree(hands, result);
}

const opponent = () => {
    let oppo=['rock','paper','scissor'];
    let result = oppo[Math.floor(Math.random * 3 )];
    
    document.querySelector('.oppohand').src = choose[result];
    return result;

   
}

const refree = (user, oppo) =>{
if(user == 'rock' && oppo == 'rock')
{
setDecision("It's tie")
}
elseif(user == 'paper' && oppo == 'paper')
{
    setDecision("It's tie")
    }
    elseif(user == 'scissor' && oppo == 'scissor')
    {
        setDecision("It's tie")
    }
    

        elseif(user == 'rock' && oppo == 'paper')
        {
        setDecision("You Lose");
         }
        elseif(user == 'paper' && oppo == 'rock')
         {
             setDecision("You Win");
        }
        elseif(user == 'scissor' && oppo == 'rock')
        {
        setDecision("You Lose");
        }
        elseif(user == 'rock' && oppo == 'scissor')
        {
        setDecision("You Win");
        }

        elseif(user == 'paper' && oppo == 'scissor')
         {
        setDecision("You Lose");
        }
        elseif(user == 'scissor' && oppo == 'paper')
         {
        setDecision("You Win");
        }


        }

        const setDecision = (decision) =>{
            console.log(decision);
        }