// function playNow(){
//     const playNow = document.getElementById('play-now')
//     const playGround = document.getElementById('play-ground')
//     playNow.setAttribute('class','hidden')
//     playGround.removeAttribute('class','hidden')
// }

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