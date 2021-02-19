class Dustbin
{
constructor(x,y,width,height)
    {
        var options= 
        { 
          isStatic:true, 
          friction:0.3,
          density:1.2
       } 
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body); 
    }
    display()
    {

      rectMode(RIGHT);
      fill("red")
      rect(this.body.position.x, this.body.position.y, this.width, this.height)

     
      
}
}