console.log("Holi mundo");

function preload() {
    soundFormats("wav");
    s1 = loadSound("Audios/Slow.wav");
    s2 = loadSound("Audios/Break.wav");
    s3 = loadSound("Audios/Street.wav");
}
var pos = 0;

function setup() {

    cnv = createCanvas(300, 300);
    amplitude = new p5.Amplitude();    

    arre = [s1, s2, s3];
    play = createButton("Play");
    stop = createButton("Stop");
    pause = createButton("Pause");
    next = createButton("Next");
    prev = createButton("Prev");
    rand = createButton("Rand");
    loop = createButton("Loop");

    play.mousePressed(plays);
    stop.mousePressed(stops);
    pause.mousePressed(pauses);
    next.mousePressed(nexts);
    prev.mousePressed(prevs);
    rand.mousePressed(rands);
    loop.mousePressed(loops);



}


function draw() {
    background(0,0,255);
    fill(255);
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 400);
    ellipse(width / 2, height / 2, size, size);
}




function plays() {
    arre[pos].play();
}
function stops() {
    arre[pos].stop();
}
function pauses() {
    arre[pos].pause();
}
function nexts() {
    arre[pos].stop();
    pos = (pos + 1) % 3;
    arre[pos].play();

}
function prevs() {
    arre[pos].stop();
    pos = pos - 1;
    if (pos == -1) {
        pos = pos + 3;

    }
    arre[pos].play();
}
function rands() {
    arre[pos].rand(arre);
}
function loops() {
    arre[pos].loop(true);
}