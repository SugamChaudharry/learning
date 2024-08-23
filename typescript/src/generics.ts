function firstEl<T>(arr:T[]){
  return arr[0];
}

const value2 = firstEl<string>(["sugam","bobby"])
console.log(value2.toLowerCase());

const value3 = firstEl<number>([11,22,33,44])
console.log(value3/4);
