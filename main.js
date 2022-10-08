img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('deez_nuts.jpg');
    alarm = loadSound('alarm-car-or-home-62554.mp3');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting le object";
}
function draw()
{
    image(video, 0, 0, 380, 380);
    if(results < 0)
    {
        document.getElementById("status").innerHTML = "Status: Baby not Detected";
        alarm.play();
    }
    else if(results[0].label == "person")
    {
        document.getElementById("status").innerHTML = "Status: Baby Detected";
    }
    else
    {
        document.getElementById("status").innerHTML = "Status: Baby not Detected";
        alarm.play();
    }
}

function modelLoaded()
{
    console.log("M o d e l  L o a d e d !");
    status = true;
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
        objects = results;
    }
    console.log(results);
}