img = ""
function setup()
{
   canvas = createCanvas(640, 420);
   canvas.center();
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill('#800080');
    noFill();
    text("Dog", 45, 75);
    stroke('#800080');
    rect(30, 60, 450, 350);
}

