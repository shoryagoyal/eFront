const testLoginForm = document.querySelector("#testLoginForm");
const testLoginForm_button = document.querySelector("#testLoginForm_button");
console.log("hy");

testLoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/test/login", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    testLoginForm.style.display = "none";

    const video = document.querySelector("#video");
    const snap = document.querySelector("#snap");
    const canvas = document.querySelector("#canvas");

    const constraints = {
      audio: true,
      video: {
        width: 1280,
        height: 720,
      },
    };

    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        window.stream = stream;
        video.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    }
    init();
    // const context = canvas.getContext("2d");
    // snap.addEventListener("click", () => {
    //   context.drawImage(video, 0, 0, 640, 480);
    // });
  };
  xhr.send(
    JSON.stringify({
      name: "a",
      email: "a@a",
      testId: "a",
    })
  );
});

const video = document.querySelector("#video");
const snap = document.querySelector("#snap");
const canvas = document.querySelector("#canvas");

const constraints = {
  audio: true,
  video: {
    width: 1280,
    height: 720,
  },
};

async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    window.stream = stream;
    video.srcObject = stream;
  } catch (err) {
    console.log(err);
  }
}
init();
const context = canvas.getContext("2d");
snap.addEventListener("click", () => {
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const data = canvas.toDataURL("image/png");
  const msg = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/random", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onload = function () {};
  xhr.send(
    JSON.stringify({
      msg: msg,
    })
  );
});
