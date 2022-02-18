class Ground
{
    constructor(x, y, w, h)
    {
        let options=
        {
            isStatic: true
        }
       this.body=Bodies.rectangle(x, y, w, h, options);
       this.width=w;
       this.height=h;
       World.add(world,this.body);
       console.log(this.body);
    }
    show()
    {
        push();
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
    }
}