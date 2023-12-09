var snare = document.getElementById("snare")
var drumroll = document.getElementById("drumroll")
var kick = document.getElementById("kick")
var hihat = document.getElementById("hihat")
var crash = document.getElementById("crash")
var ride = document.getElementById("ride")
var hightom = document.getElementById("hightom")
var mediumtom = document.getElementById("mediumtom")
var floortom = document.getElementById("floortom")




$(document).on("keypress", function (e) {
    if (e.key == " ") {
        kick.currentTime = 0; // reset audio to the start
        kick.play();
    } else if (e.key == "a") {
        snare.play()
        if (e.key === 'a') {
            var audio = document.getElementById('snare');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
    } else if (e.key == "r") {
        drumroll.play()
    } else if (e.key == "s") {
        kick.play()
    }
    if (e.key === 's') {
        var audio = document.getElementById('kick');
        audio.currentTime = 0; // reset audio to the start
        audio.play();
    }
     else if (e.key == "q") {
        hihat.play()
    }
    if (e.key === 'q') {
        var audio = document.getElementById('hihat');
        audio.currentTime = 0; // reset audio to the start
        audio.play();
    }
        else if (e.key == "4") {
            ride.play()
        }
        if (e.key === '4') {
            var audio = document.getElementById('ride');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
        else if (e.key == "1") {
            crash.play()
        }
        if (e.key === '1') {
            var audio = document.getElementById('crash');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
        else if (e.key == "d") {
            floortom.play()
        }
        if (e.key === 'd') {
            var audio = document.getElementById('floortom');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
        else if (e.key == "e") {
            mediumtom.play()
        }
        if (e.key === 'e') {
            var audio = document.getElementById('mediumtom');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
        else if (e.key == "w") {
            mediumtom.play()
        }
        if (e.key === 'w') {
            var audio = document.getElementById('hightom');
            audio.currentTime = 0; // reset audio to the start
            audio.play();
        }
        

});