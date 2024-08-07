//Función para activar la cámara
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

//Funcion para dibujar o realizar la tarea
function draw(){
    background('#FF8C00');
    fill('#FFA500');
    stroke('#FFD700');
    square(noseX, noseY, 100);
    document.getElementById("square_side").innerHTML = 
    "El ancho y el alto será= " + difference + "px";
}

//Función para activar el modelo.
function modelLoaded(){
    console.log('PoseNet se inicializó');
}

//Función para mostrar el resultado.
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX);
        console.log("noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX);
        console.log("rightWristX = " + rightWristX);
        console.log("difference = " + difference);
    }
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
