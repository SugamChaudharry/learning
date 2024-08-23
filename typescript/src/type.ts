type User2 = {
	firstName: string;
	lastName: string;
	age: number
}
function isLegal(user:User):void{
  if(user.age > 18) console.log(user.name + " is legal");
  else console.log(user.name + " is illegal");
}

isLegal({
    name:"sugam",
    age: 19
  })