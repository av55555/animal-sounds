function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qL6XYgyfe/model.json", model_loaded);
    }
    
    function model_loaded(){
    classifier.classify(gotresults);
    }
    
    function gotresults(error,results){
        console.log("Got result");
    }