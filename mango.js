class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("ninja star.jpg")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		this.Visibility = 255;
	
	}

	display()
	{
		if(this.body.speed< 2.5){
			var mangoPos=this.body.position;	
			push()
			translate(mangoPos.x, mangoPos.y);
			// rectMode(CENTER);
			rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()	
		}
		else{
			World.remove(world, this.body);
			push();
		
			this.Visibility = this.Visibility - 100;
			tint(255,this.Visibility);
			image(this.image, this.body.position.x, this.body.position.y, 50, 50);
			pop();
		}
		
 }
 scoreNS(){
    if (this.Visibility < 0 && this.Visibility > -100){
      scoreNS++;
    }
  }

}