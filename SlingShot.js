class SlingShot
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.03
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display()
    {
        strokeWeight(0);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
}