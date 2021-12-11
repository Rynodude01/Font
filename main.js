r_w_x = 0;
l_w_x = 0;
difference = 0;
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function modelloaded(){
    console.log("model has loaded");
}
function gotposes(result){
    if(result.length > 0){
        console.log(result);
        l_w_x = result[0].pose.leftWrist.x;
        r_w_x = result[0].pose.rightWrist.x;
        difference = Math.floor(l_w_x - r_w_x);
    }
}
function draw(){
    background("#38423B");
    document.getElementById("font_size").innerHTML = "font size will be "+difference;
    textSize(difference);
    fill("#FF47DA");
    text("Ryon",50,400);
}