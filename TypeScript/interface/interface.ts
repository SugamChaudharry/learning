interface User  {
  readonly _id: string | number;
  name: string;
  age: number;
  email: string;
  isActivated: boolean;
  credcardDetails?: number;
//   startTrail: ()=> string; // 1 way
  startTrail() : string; // 2 way
  getCoupon(couponName : string , value : number):number
};

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sugam: Admin = {
  _id: "c2b6$urSUHAM",
  name: "sugamChaudharry",
  age: 19,
  email: "sugamchaudhary36@gmail.com",
  isActivated: true,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon(name: "sugam", off: 10) {
    return 10;
  },
};