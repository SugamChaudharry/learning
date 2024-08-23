interface User {
  name: string;
  age: number;
}
function isLegal(user:User):void{
  if(user.age > 18) console.log(user.name + " is legal");
  else console.log(user.name + " is illegal");
}

isLegal({
    name:"sugam",
    age: 19
  })

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
  }

  greet(phrase: string) {
      console.log(`${phrase} ${this.name}`);
  }
}