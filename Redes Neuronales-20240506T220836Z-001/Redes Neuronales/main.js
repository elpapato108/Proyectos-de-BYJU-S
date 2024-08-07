//Crear variables para cada predicción.

prediction_1 = " ";
prediction_2 = " ";

//Proceso para activar la cámara en la App

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

//Proceso para capturar una imagen con la cámara.

function take_snapshot(){

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = 
        '<img id="captured_image" src"'+data_uri+'"/>';
    })

}

//Proceso para llamar y activar el modelo entrenado.

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LB3WZ3sFL/', modelLoad);

//Proceso para que el modelo clasifique cada imagen.

function modelLoad(){
    console.log('Model Loaded!');
}

//Proceso para crear la función que convierte el texto a voz.

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "La primera predicción es: "+prediction_1;
    speak_data_2 = "La segunda predicción es: "+prediction_2

    var utterThis = new SpeechSynthesisisUtterance (speak_data_1,speak_data_2);

    synth.speak(utterThis);
}

//Proceso para activar el botón de check.

function check(){

    img = document.getElementById('captured_image');
    classifier.classify(img, getResult);
}

//Proceso para mostrar los resultados del modelo entrenado.

function getResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_emotion_name").innerHTML =
        result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = 
        result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();

        //Proceso para unir los emojis con las predicciones.

        if(result[0].label == "feliz"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128522;";
        }

        if(result[0].label == "triste"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128532;";
        }

        if(result[0].label == "enojado"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128545;";
        }

        if(result[1].label == "feliz"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128512;";
        }

        if(result[1].label == "triste"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128546;";
        }

        if(result[1].label == "enojado"){
            document.getElementById("update_emoji").innerHTML = 
            "&#128548;";
        }



    }
}
