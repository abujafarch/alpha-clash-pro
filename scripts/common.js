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

function getARandomAlphabet(){
    const abcString = 'abcdefghijklmnopqrstuvwxyz'
    const abcArray = abcString.split('')
    const randomNumber = Math.round(Math.random()*25)
    const randomLetter = abcArray[randomNumber]
    return randomLetter;
}
