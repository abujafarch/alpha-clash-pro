// function playNow(){
//     const playNow = document.getElementById('play-now')
//     const playGround = document.getElementById('play-ground')
//     playNow.setAttribute('class','hidden')
//     playGround.removeAttribute('class','hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const expectedKey = event.key;
    const randomLetter = document.getElementById('random-letter').innerText.toLowerCase()
    if(expectedKey === randomLetter){
        removeBackgroundColorById(expectedKey);
        scoreCount();
        continueGame();
    }
    else if(expectedKey !== randomLetter){
        if( lifeReduce() === 0){
            document.getElementById('final-score').classList.remove('hidden');
            document.getElementById('play-ground').classList.add('hidden');
            removeBackgroundColorById(randomLetter)
            document.getElementById('score-counted').innerText = scoreCount() - 1;
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet = getARandomAlphabet()
    const playGroundLetter = document.getElementById('random-letter')
    playGroundLetter.innerText = alphabet
    addBackgroundColorById(alphabet)
}

function playNow(){
    hideElementById('play-now')
    showElementById('play-ground')
    continueGame()
}