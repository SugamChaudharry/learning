// The inferred return type is void
function error(errorMsg: string): void {
    console.log("Error: " + errorMsg); 
    // return 2;// you can not return anything here bcz it is void function
}

// The inferred return type is never
function fail(msg: string): never {
  throw new Error(msg); 
}// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. in simple words it means that it will never return anything

/*
Q) diffrence between void and never
void is a type that represents the absence of a value,
while never is a type that represents a value that never occurs.

Q) when to use never and when to use void

Use void when a function returns normally and doesn't return any value.
Use never when a function never returns (it always throws an exception or halts the program).
*/