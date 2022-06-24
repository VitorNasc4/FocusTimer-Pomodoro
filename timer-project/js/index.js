import {buttonPlay, buttonPause, buttonStop, buttonSoundOn, buttonSoundOff, buttonSet, minutesDisplay, secondsDisplay, minutes} from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import Events from "./events.js"



const sounds = Sounds()
const controls = Controls({buttonPlay, buttonPause, buttonSet, buttonStop})
const timer = Timer({minutesDisplay, secondsDisplay, resetControls: controls.reset, minutes})
const events = Events({controls, timer, sounds })