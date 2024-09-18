
let playBTN = document.getElementById("startBTN")
let stopBTN = document.getElementById("stopBTN");
let sound = new Audio("alarm.wav");

playBTN.addEventListener("click", timer)
stopBTN.addEventListener("click", stopTimer)


function timer(){
   
    var sec = 10;
    var min = 1;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=min+':'+sec;
        sec--;
        if (sec < 0) {
            sec = 10;
            min--;
            //clearInterval(timer);
        }
        if(min == 0){
           
            sound.play()
            clearInterval(timer);
        }
    }, 1000);
}


function stopTimer(){
    sound.pause()
}
