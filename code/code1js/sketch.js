let movers = []
let size = 20;
let randomd;

function setup() {
createCanvas(windowWidth -50, windowHeight-200);
 for(let i =0; i <size; i++){
   let mover = new Mover(random(width),random(height),100);
   movers.push(mover);
   
 }
  
}

function draw() {
  background(0,0,0,50);
  for(let i = 0; i<size; i++){
    movers[i].update();
    movers[i].show();
  }
}


function mousePressed(){
  for(let i = 0; i < size; i++){
    movers[i].clicked();
  }
  
  
}


function windowResized(){
  resizeCanvas(windowWidth - 50, windowHeight - 200);
}