class Stone extends  BaseClass{
  constructor(x, y, width, height,angle) {
    super(x,y,width,height);
    this.image = loadImage("sprites/stone.png");
    Matter.Body.setAngle(this.body,angle);
  }
}

