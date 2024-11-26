// Camera Settings
(() => {
    const width = 320; // We will scale the photo width to this
    let height = 0; // Computed based on the input stream
  
    let streaming = false;
    let video = null;
    let canvas = null;
    let photo = null;
    let startButton = null;
    let sec = 10;
    let min = 1;
    let timer;

    // Timer Functionality
    const playBTN = document.getElementById("startBTN");
    const stopBTN = document.getElementById("stopBTN");
    const sound = new Audio("alarm.wav");
    const continueBTN = document.getElementById("continueBTN");
    const resetBTN = document.getElementById("resetBTN");

    let userFinishDrawing = null;
  
    // Function to initialize the camera
    function startup() {
      video = document.getElementById("video");
      canvas = document.getElementById("canvas");
      photo = document.getElementById("photo");
      startButton = document.getElementById("start-button");
  
      clearPhoto();
  
      // Access the user's webcam
      navigator.mediaDevices
        .getUserMedia({ 
          video: {
            facingMode: 'environment'
          } ,
          audio: false 
        
        })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(`An error occurred: ${err}`);
        });
  
      video.addEventListener(
        "canplay",
        (ev) => {
          if (!streaming) {
            height = (video.videoHeight / video.videoWidth) * width;
            video.setAttribute("width", width);
            video.setAttribute("height", height);
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            streaming = true;
          }
        },
        false
      );
  
      startButton.addEventListener(
        "click",
        (ev) => {
          takePicture();
          ev.preventDefault();
        },
        false
      );
    }
  
    // Function to clear the photo area
    function clearPhoto() {
      const context = canvas.getContext("2d");
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    }
  
    // Function to take a picture
    function takePicture() {
      const context = canvas.getContext("2d");
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
  
        const data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
      } else {
        clearPhoto();
      }
    }

    // Start the timer
  function startTimer() {
    let btnState = document.getElementsByClassName("btnState");
    let startBTN = document.getElementById("startBTN");
    startBTN.style.display = "none"
    for(let x = 0; x < btnState.length; x++){
      btnState[x].style.display = "inline-block";
    }

    console.log(btnState);
    userFinishDrawing = false;
    
    timer = setInterval(function () {
      document.getElementById("timer").innerHTML = `${min}:${sec}`;
      sec--;
      if (sec < 0) {
        sec = 10;
        min--;
      }
      if (min === 0) {
        userFinishDrawing = true;
        sound.play();
        clearInterval(timer);
      }
    }, 1000);
  }

  function resumeTimer(){
    startTimer()
    console.log("working")
  }
  
  // Stop the timer
  function stopTimer() {
    sound.pause();
    setTimeout(function(){
      clearInterval(timer);
   }, 1000);

    if (userFinishDrawing) {
      // Add any functionality you want when the user has finished drawing
    }
  }
  // Rest the timer
  function resetTimer(){
    sec = 10;
    min = 1;
    startTimer();
  }

     // Event listeners for timer buttons
  playBTN.addEventListener("click", startTimer);
  stopBTN.addEventListener("click", stopTimer);
  continueBTN.addEventListener("click", resumeTimer)
  resetBTN.addEventListener("click", resetTimer);
  
    // Initialize the camera on page load
    window.addEventListener("load", startup, false);
  })();
  
  
  
  
  
 
  