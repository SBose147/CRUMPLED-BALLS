class Paper{
    constructor(x,y)
    {
      var options = 
      {
        restitution : 0.3,
        density : 1.2,
        friction : 1.5,
        isStatic : false
      } 

      this.body = Bodies.circle(x,y ,20,options) ;
      this.radius =20;
      
      World.add(world,this.body);
      console.log(this.body);
    }
    display()
    {
      var pos = this.body.position;  
      var angle = this.body.angle;
      
      
      push();
      translate (pos.x, pos.y); 
      rotate (angle);
      fill ("purple"); 
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();

      
           
    }
  } 
