class ground{
    constructor(x,y,w,h)
    var options={iStatic:true}
            this.x=x;this.y=y;this.w=w;this.h=h	
            this.body=Bodies.rectangle(x, y, w, h , options); 
            World.add(world,this.body); 
            display();
            var groundPos=this.body.position;
            Push();
            translate(groundPos.x, groundPos.y);
            rectMode(CENTER)
            fill(128,128,128)
            rect(0,0,this.w, this.h);
            pop();


            


            