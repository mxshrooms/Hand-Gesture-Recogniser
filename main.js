https://teachablemachine.withgoogle.com/models/vDMiD0n12/
Webcam.set({
    width:350, height:350, image_format:'png', png_quality: 100
});

var camera = document.getElementById("camera");

Webcam.attach('#camera');

function takepic() {
    Webcam.snap(function (datauri){
        document.getElementById("result").innerHTML = '<img id="capture" src="'+datauri+'">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vDMiD0n12/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function identify() {
    img = document.getElementById('capture');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("confidence").innerHTML = results[0].confidence.toFixed(3);
    }
}