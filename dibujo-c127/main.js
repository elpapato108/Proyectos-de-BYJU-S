//función de configuración.
function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.SpeechSynthesis;
}

//función de limpiar el canvas.
function clearCanvas(){
    background("white");
}

//función para precargar el modelo "DoodleNet" de IA.
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

//función para dibujar.
function draw(){
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

//función para clasificar los dibujos.
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

//función para el resultado
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    
    console.log(results);

    document.getElementById('label').innerHTML = 
    'etiqueta: ' + results[0].label;

    document.getElementById('confidence').innerHTML = 
    'Precision: ' + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);

}





