let musicFile1;
let musicFile2;
let leftWristX = 0;
let leftWristY = 0;
let rightWristX = 0;
let rightWristY = 0;

function preload() {
  musicFile1 = loadSound('music.mp3');
  musicFile2 = loadSound('music2.mp3');
}

function setup() {
  createCanvas(640, 480);
  let capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function draw() {
  image(capture, 0, 0, windowWidth, windowHeight);
}

function modelLoaded()
{
  console.log('PoseNet Model is ready');
}

