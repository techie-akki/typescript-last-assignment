class Point1{
  // private x:number;
  // private y:number;

  constructor(private _x?:number,private _y?:number){
    // this.x=x;
    // this.y=y;

  }

  draw(){
    console.log('X: '+ this._x + ', Y: '+ this._y);
  }

  get x(){
    return this._x;
  }
  set x(value){
    if (value<0)
      throw new Error('cant be 0');
    this._x = value;
  }
}

// object

let point1=new Point1(1,2);
let x = point1.x;
point1.x = 10;
point1.draw();
