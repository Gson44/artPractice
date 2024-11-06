// Camera Settings
(() => {
    const width = 320; // We will scale the photo width to this
    let height = 0; // Computed based on the input stream
  
    let streaming = false;
    let video = null;
    let canvas = null;
    let photo = null;
    let startButton = null;
  
    // Function to initialize the camera
    function startup() {
      video = document.getElementById("video");
      canvas = document.getElementById("canvas");
      photo = document.getElementById("photo");
      startButton = document.getElementById("start-button");
  
      clearPhoto();
  
      // Access the user's webcam
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
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
  
    // Initialize the camera on page load
    window.addEventListener("load", startup, false);
  })();
  
  // Timer Functionality
  const playBTN = document.getElementById("startBTN");
  const stopBTN = document.getElementById("stopBTN");
  const sound = new Audio("alarm.wav");
  
  let userFinishDrawing = null;
  
  // Start the timer
  function startTimer() {
    userFinishDrawing = false;
    let sec = 10;
    let min = 1;
    const timer = setInterval(function () {
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
  
  // Stop the timer
  function stopTimer() {
    sound.pause();
    if (userFinishDrawing) {
      // Add any functionality you want when the user has finished drawing
    }
  }
  
  // Event listeners for timer buttons
  playBTN.addEventListener("click", startTimer);
  stopBTN.addEventListener("click", stopTimer);
  