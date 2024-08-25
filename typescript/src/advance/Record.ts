interface User3 {
  id: string;
  name: string;
}

// object type
// type Users3 = {
//    [key: string]: User3
//  };

// by using record
type Users3 = Record<string, User3>

const users: Users3 = {
  abc123: {
    id: "abc123",
     name: "John Doe"
     },
  xyz789: {
     id: "xyz789",
      name: "Jane Doe"
     },
};
// record