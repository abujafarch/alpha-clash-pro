function playNow(){
    const playNow = document.getElementById('play-now')
    const playGround = document.getElementById('play-ground')
    playNow.setAttribute('class','hidden')
    playGround.removeAttribute('class','hidden')
}