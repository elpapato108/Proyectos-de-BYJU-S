function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objectos";
}

img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('image.png');
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status != "") {
        r = random(255)
        g = random(255)
        b = random(255)
        objectDetector.detect(video, gotResult);
        //Aquí va el código para cerrar los objectos
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Estado: Objectos detectados";
            document.getElementById("number_of_objects").innerHTML = "Número de objectos detectados: "+ objects.length;

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("¡Modelo cargado!");
    status = true;
    objectDector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results
}