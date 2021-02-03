class bob {
    constructor(x,y){
        var options={
            isStatic :true,
            restitution :0.3,
            friction :0,
            density :1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("rgb(255, 0, 128)");
        ellipse(0, 0, 25, 25);
        pop();
      }
   
}