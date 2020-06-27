class Plinko {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.5,
          isStatic:true,
          'friction':0.5,
          'density': 1.2
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body);
     /*for(var j =40; j <=width j=j+50)
{
 plinkos.push(new Plinkos(j,75));
}
for (var j =15; j <=width-10; j=j+50)
{
plinkos.push(new Plinko(j,175));
}*/

    }
     
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      ellipse(0,0,this.radius,this.radius);
      fill(255);
      pop();
      
    }
    
}







  