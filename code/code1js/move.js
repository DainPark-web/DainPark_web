class Mover{
  
    constructor(x, y, size){
      this.pos = createVector(x, y);
      this.vel = createVector(1.0, 1.0);
      this.size = size;
      this.acc = createVector(0.1,0.1);
      this.age = random(1);
      
    }
    
    
    
    show(){
      noStroke();
      fill(255);
      circle(this.pos.x, this.pos.y,this.size);
      fill(0,200,0);
      ellipse(this.pos.x, this.pos.y, 70,30);
      fill(0);
      ellipse(this.pos.x, this.pos.y, 30,30);
      fill(255,9,9);
      circle(mouseX, mouseY,20);
    }
    
    
    update(){
  // // randomize velocity
  //     this.vel = p5.Vector.random2D();
  //     this.vel.mult(random(10));
  //     this.pos.add(this.vel);
      
      
    
  // // check for collision
  //     if(this.pos.x > width || this.pos.x < 0){
  //     this.vel.x = this.vel.x * -1;
  //     }
  
  //     if(this.pos.y > height || this.pos.y < 0){
  //     this.vel.y = this.vel.y * -1.0;
  //     }
      let mouse = createVector(mouseX, mouseY);
      this.acc = p5.Vector.sub(mouse, this.pos);
      this.acc.setMag(1);
      // mouse.sub(this.pos);
      this.vel.add(this.acc);
      
      this.vel.limit(10); // limit speed;
      // console.log(this.vel.mag());
      this.pos.add(this.vel);
    }  
    
    
    clicked(){
      let mouse = createVector(mouseX, mouseY);
      this.pos.x = random(0, width);
      this.pos.y = random(0, height);
      
      
    }
    
    
    
  }