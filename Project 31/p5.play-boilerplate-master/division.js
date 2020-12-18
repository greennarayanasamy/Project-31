class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER);
        fill("white");
        rect(this.pos.x,this.pos.y,this.w,this.h);
    }
};