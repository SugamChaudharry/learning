const x: number = 234;
console.log(x);

function greet(name: string){
  console.log("hello : ",name);
}
greet("sugam");

function sum(a:number,b:number): number {
  return a+b;
}
const value = sum(3,5);
console.log(value);
// it is infring return datatype
function isLegal2(num:number){
  if(num>18){
    return true;
  }
  return false
}

function delay(fn:() => void){
  setTimeout(()=>{
    fn();
  },1000)
}
delay(() =>{
  console.log("hello");
})