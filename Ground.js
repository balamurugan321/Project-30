class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(650,590,1300,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(0,25,30);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1300,20);
    }
}