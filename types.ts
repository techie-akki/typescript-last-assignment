// let count =5;
// count='a';

// let a;
// a=1;
// a=true;
// a='a';

//type annotation
// let a:number;
// let b:boolean;
// let c:string;
// let d: any;
// let e:number[]=[1,2,3];
// let f:any[]=[1,true,'hello'];

// const ColorRed =0;
// const ColorGreen =1;
// const ColorBlue=2;

// enum Color{Red,Green,Blue};
// let bgColor = Color.Red;

//type assertions

let message;
message ='abc';
let endWithC = (<string>message).endsWith('c');
let alternateineWay = (message as string).endsWith('c');