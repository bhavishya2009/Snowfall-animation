class Snow
{
  constructor() 
  {
    let options = {
     isStatic:false
    };
    
    this.snow = Bodies.rectangle(random(1,1400),10,10,10,options);
    World.add(world, this.snow);
  }

  show() {
    let pos = this.snow.position;
    imageMode(CENTER);
    image(snowImg,pos.x,pos.y,10,10);
  }
}