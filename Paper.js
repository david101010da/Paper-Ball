class Paper{
    constructor(x,y,radius){
     var options ={
         isStatic:false,
         restitution:0.3,
         friction:0.15,
         density:0.15,
     }
 
     this.body = Bodies.circle(x,y,radius/2,options);
     this.radius = radius;
     this.image = loadImage("paper.png");
     
 
     World.add(world,this.body);
    }
   display(){
    var pos =  this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("white");
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
   }
};
