class Snow {
    constructor(x,y){
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        this.image= loadImage("snow4.webp")
        World.add(world, this.body);
      
        
    }

    display(){
    push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);

        pop()
        
    }

};