class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:0.5
      }
      this.body = Bodies.circle(x, y, 15, options);
      //this.width = 50;
      //this.height = 50;
      //this.image = loadImage("sprites/paper.png"); 
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      fill("purple");
      stroke("purple");
      strokeWeight(1);
      ellipse(0, 0, 30, 30);
      pop();
    }
  }