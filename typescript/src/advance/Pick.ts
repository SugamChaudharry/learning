interface User{
  id:number,
  name:string,
  age:number,
  email:string,
  password: string,
}
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

function updateUser(user:UpdateProps){
  console.log(`name is ${user.name} and age is ${user.age}`);
}

updateUser({
  age:44,
  email:"svdsa",
  
})
