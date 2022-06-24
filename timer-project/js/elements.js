const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const buttonSet = document.querySelector('.set')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

export {buttonPlay, buttonPause, buttonStop, buttonSoundOn, buttonSoundOff, buttonSet, minutesDisplay, secondsDisplay, minutes}