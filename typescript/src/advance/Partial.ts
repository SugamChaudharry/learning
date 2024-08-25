interface User1 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
};

type UpdateProps1 = Pick<User1 , 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser1(updatedProps: UpdatePropsOptional) {
  // hit the database tp update the user
}
updateUser1({
  age:32,
  name:"aaf"
})