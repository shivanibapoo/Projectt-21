class Ball{
    constructor(x, y, radius){

        var ball_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 5,
            density: 1.2
        }
    
        this.body = Bodies.circle(x, y, radius, ball_options);
        this.x = x;
        this.y = y;
        this.radius = radius;
    
        World.add(world, this.body);
    
    }

    show() {
        
        var pos = this.body.position;
        push();
        fill("white");
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}
