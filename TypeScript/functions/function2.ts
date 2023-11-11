function addTwoNum(num) {
  //   return num + 2;
  return "hello"; // no error
}
addTwoNum(5);

// WITHOUT TYPE SAFETY on return value
function multiply(num: number, num2: number = 5) {
  if (num > num2) {
    return true;
  }
  return num * num2;
}
multiply(5, 5);

// altomatic type inference
const heros = ["superman", "batman", "flash", "wonderwoman"];
// const heros = [1,2,3,4];

heros.map((hero) => {
    return 1;
});

// without type safety
//------------------------------------------------------------------------------------------------------------------------------
// with type safety

function addTwoNum2(num): number {
  return num + 2;
    return "hello"; 
}
addTwoNum(5);

// WITH TYPE SAFETY on return value
function multiply2(num: number, num2: number = 5): number {
  if (num > num2) {
    return true;// error
  }
  return num * num2;
}
multiply(5, 5);


// altomatic type inference
const heros2 = ["superman", "batman", "flash", "wonderwoman"];
// const heros2 = [1,2,3,4];

heros2.map((hero):string => {
    return 5;// error
    return `${hero} is a hero`
});