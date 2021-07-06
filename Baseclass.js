class BaseClass{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':5.0,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("1.png");
        World.add(world, this.body);
      }
      display(){
       
        push();
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}