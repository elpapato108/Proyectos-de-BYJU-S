function preload(){
//función para cargar todos los recursos
}

//función para crear el lienzo usando p5.
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);

    //código para acceder a la cámara.
    video = createCapture(VIDEO);
    video.hide();
    background(200);
    circle(595, 50, 90);
    rect(30, 20, 55, 55);
}

//función para dibujar en el lienzo usando p5.
function draw(){
    image(video, 0,0,640,480);
    circle(50, 50, 90);
}

//función para tomar la foto usando p5.
function take_snapshot(){
    save('student.png');
}
