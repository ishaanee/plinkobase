class Plinko {
    constructor(x, y,r) {
      var options = {
          'restitution':0.5,
      }
      this.r=r
      this.body=Bodies=circle(x, y,radius,options);
this.color=color=color(random(0,255),random(0,255));
World.add(world,this.body)
    }
     
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      ellipse(0,0,this.r,this.r);
      fill(255);
      pop();
      
    }
    
}



  