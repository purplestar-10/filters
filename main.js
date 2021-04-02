lipX=0;
lipY=0;
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotResults);
}
function preload(){
    red_lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png",modelLoaded);
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function draw(){
    image(video,0,0,300,300);
    image(red_lipstick,lipX,lipY,60,50);
}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
        lipX = results[0].pose.nose.x-25;
        lipY = results[0].pose.nose.y+15;
    }
}
function take_snapshot(){
    save("My red lipstick.png");
}