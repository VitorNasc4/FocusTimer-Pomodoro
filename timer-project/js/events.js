import {buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff} from "./elements.js"

export default function ({controls, timer, sounds }) {
    
    buttonPlay.addEventListener('click', function() {
        controls.play()
    
        timer.countdown()
    
        sounds.buttonPress()
    })
    
    buttonPause.addEventListener('click', function() {
        controls.pause()
    
        timer.hold()
    
        sounds.buttonPress()
    })
    
    buttonStop.addEventListener('click', function() {
        controls.reset()
        
        timer.reset()
    
        sounds.buttonPress()
    })
    
    buttonSet.addEventListener('click', function() {
        let newMinutes = controls.getNewMinutes()
        if (!newMinutes) {
            timer.reset()
            return
        }
        
        timer.updateMinutes(newMinutes)
        timer.updateDisplay(newMinutes, 0)
    })
    
    buttonSoundOn.addEventListener('click', function() {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
    
        sounds.bgAudio.play()
    })
    buttonSoundOff.addEventListener('click', function() {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
    
        sounds.bgAudio.pause()
    })
    
}