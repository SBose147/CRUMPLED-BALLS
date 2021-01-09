class Dustbin
{
    constructor(x, y, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, 15, height, options);
        this.width = 15;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("yellow");
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
}