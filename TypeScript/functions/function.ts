function addTwoNum(num) {
  return num + 2;
}
addTwoNum(5);
addTwoNum("hello");// should have show error

// by using type 
//--------------------------- type is very nessery in here-----------------------------------------------------------------
// by not using type 

function multiply(num: number, num2: number = 5 ) {
  return num * num2;
}
multiply(5, 5);
// multiply(5, 'sugam'); // show error


export {};

