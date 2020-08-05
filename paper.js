class Paper {
    constructor() {

      var options = {
          'restitution': 0.9,
          'friction' : 1.0,
          'density':1.0
     
        }
      this.body = Bodies.circle(200,100,25,options);
      this.image = loadImage("paper.png");
      this.radius = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      fill(255,0,255);
      image(this.image,0,0,this.radius,this.radius);
      pop();
      
    }
}

