
let playBTN = document.getElementById("startBTN")

playBTN.addEventListener("click", timer)



function timer(){
   
    var sec = 59;
    var min = 60;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML=min+':'+sec;
        sec--;
        if (sec < 0) {
            sec = 60;
            min--;
            //clearInterval(timer);
        }
    }, 1000);
}

