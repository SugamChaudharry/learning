const { verify } = require('crypto');
const jwt = require('jsonwebtoken');

const value = {
  name:"sugam",
  accNumber: 13124124,
}

// jwt
const token = jwt.sign(value, "secret")
console.log(token);
// this token has been genrate by sectret so it can only decoded or verify by this token
// token >> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VnYW0iLCJhY2NOdW1iZXIiOjEzMTI0MTI0LCJpYXQiOjE3MjM1MDM0NTF9.RmuKbN6_MKnq1XeJne6Qpm6AHFthR_THI56NiA2je5I
try {
  const verifiedValue1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VnYW0iLCJhY2NOdW1iZXIiOjEzMTI0MTI0LCJpYXQiOjE3MjM1MDM0NTF9.RmuKbN6_MKnq1XeJne6Qpm6AHFthR_THI56NiA2je5I")
  console.log(verifiedValue1);
} catch (error) {
  console.log("Error ::::: ", error.message);
}
try {
  const verifiedValue2 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VnYW0iLCJhY2NOdW1iZXIiOjEzMTI0MTI0LCJpYXQiOjE3MjM1MDM0NTF9.RmuKbN6_MKnq1XeJne6Qpm6AHFthR_THI56NiA2je5I","secrert")
  console.log(verifiedValue2);
} catch (error) {
  console.log(error);
}