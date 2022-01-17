function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yjzbO6ru6/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
 var cow = 0;
var lion = 0;
var background_noise = 0;
function gotResults(error, results){
 if(error){
     console.error(error);
 }
 else{
     console.log(results);
     random_number_r = Math.floor(Math.random()*255) + 1;
     random_number_g = Math.floor(Math.random()*255) + 1;
     random_number_b = Math.floor(Math.random()*255) + 1;
     document.getElementById("result-label").innerHTML = "I can hear - " + results[0].label;
     document.getElementById("result-confidence").innerHTML = "Accuracy - "+ (results[0].confidence * 100).toFixed(2) + "%";
    //  document.getElementById("result-confidence").innerHTML = "Detected Dog"+ dog;
    //  document.getElementById("result-confidence").innerHTML=  "Detected Cat" + cat;
    //  document.getElementById("result-confidence").innerHTML = "Detected Cow" + cow;
    //  document.getElementById("result-confidence").innerHTML = "Detected Lion" + lion;
     document.getElementById("result-confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("result-label").innerHTML = "Detected Voice Is Of - " + results[0].label;
     document.getElementById("result-label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     img = document.getElementById("result-label");
     if(results[0].label == 'Barking'){
        img.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*';
     }
     else if(results[0].label == 'Meowing')
     {
         img.src = 'ca.jpeg';
     }
     else if(results[0].label == 'Mooing')
     {
         img.src = 'Cow.jpeg';
     }
     else if(results[0].label == 'Lion')
     {
         img.src = 'Lion_waiting_in_Namibia.jpeg';
     }
 }
}