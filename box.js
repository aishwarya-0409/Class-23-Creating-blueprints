class Box{
    constructor(x,y,width,height){
     var obj_option = { 'restitution' : 1.0 }
     this.obj = Bodies.rectangle(x,y,width,height,obj_option)
     this.width = width;
     this.height = height;
     World.add(world,this.obj);

    }

  display(){
      var pos = this.obj.position;
      var angle = this.obj.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
     rect(0,0,this.width,this.height)
     pop()
  }
}
