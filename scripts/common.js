function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function addBackgroundColorById(element){
    const alphabetElement = document.getElementById(element)
    alphabetElement.classList.add('bg-orange-400')
}
function removeBackgroundColorById(element){
    const alphabetElement = document.getElementById(element)
    alphabetElement.classList.remove('bg-orange-400')
}

function getARandomAlphabet(){
    const abcString = 'abcdefghijklmnopqrstuvwxyz'
    const abcArray = abcString.split('')
    const randomNumber = Math.round(Math.random()*25)
    const randomLetter = abcArray[randomNumber]
    return randomLetter;
}

function scoreCount(){
    let scoreCount = parseInt(document.getElementById('score').innerText)
    scoreCount = scoreCount + 1
    document.getElementById('score').innerText = scoreCount;
    return scoreCount;
}
function lifeReduce(){
    let life = document.getElementById('life')
    lifeNumber = parseInt(life.innerText);
    lifeNumber = lifeNumber - 1;
    document.getElementById('life').innerText = lifeNumber;
    return lifeNumber
}
function playAgain(){
    document.getElementById('play-ground').classList.remove('hidden')
    document.getElementById('final-score').classList.add('hidden')
    continueGame()
    document.getElementById('life').innerText = 5;
    document.getElementById('score').innerText = 0;
}
