class Ground{
  constructor(){
    var object_option = { isStatic : true }
    this.object = Bodies.rectangle(200,200,400,50,object_option);
    World.add(world,this.object);
  }
  display(){
    rectMode(CENTER);
    rect(this.object.position.x,this.object.position.y,400,50);
  }
}