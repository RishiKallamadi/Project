

function setup() {
    canvas = createCanvas(420, 420)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    video.size(420, 420)
}

function draw() {
    image(video, 0, 0, 420, 420)
}