noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/Mp2JV9td/nose-just-nose.png');
}

function setup()
{
    canvas = createCanvas(500,399);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,399);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}
}

function modelLoaded()
{
    console.log('model is initialized');
}

function draw()
{
  image(video,0,0,500,399);
  image(clown_nose,noseX,noseY,31.2536373867468480294283428478723874920202902028028982929829829892892928928982928428,31.3623429038038938983983983983939893893893893893898398399284893228748299489278439279479279482839);
}

function Snapshot()
{
    save('christmas_clown.png');
}