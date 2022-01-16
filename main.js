function preload() {

}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 350, 300);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses() {
    
}