class Point1{
  x:number;
  y:number;

  constructor(x?:number,y?:number){
    this.x=x;
    this.y=y;

  }

  draw(){
    console.log('X: '+ this.x + ', Y: '+this.y);
  }

  
}

// object

let point1=new Point1(1,2);
point1.x=3;
point1.draw();
