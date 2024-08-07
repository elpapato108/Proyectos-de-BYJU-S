x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

//Activar la "API WEB SPEECH" de voz a texto.

var SpeechRecognition = window.webkitSpeechRecgnition;

var recognition = new SpeechRecognition();

//Activar el botón de dibujar.
function start(){
    ementdocument.getElById("status").innerHTML = 
    "El sistema está escuchando, por favor, habla...";

    recognition.start();

}

//Código para mostrar el resultado.

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML =
    "La voz se reconoció como: " + content;

    if(content == "Circle"){
        x = Math.florr(Math.random() * 900);
        y = Math.florr(Math.random() * 600);

        document.getElementById("status").innerHTML = 
        "Se empezó a dibujar un cículo";
        draw_circle = "set";
    }

    if(content == "Rectangle"){
        x = Math.florr(Math.random() * 900);
        y = Math.florr(Math.random() * 600);

        document.getElementById("status").innerHTML = 
        "Se empezó a dibujar un rectángulo";
        draw_rect = "set";
    }
}

//Código para dibujar en el lienzo las figuras.