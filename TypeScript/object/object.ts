// type aliases

type User = {
  readonly _id: string;
  name: string;
  age: number;
  email: string;
  isActivated: boolean;
  credcardDetails?: number;
};

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    date: string
}
type credDetails = cardDate & cardNumber & {
    cvv: number
}

function craeteUser(user: User){
    return {
      name: "sugam",
      age: 20,
      email: "s@s.com",
      isActivated: true,
    };
}

craeteUser({
    _id : "aallsskkddjjffhhgg",
    name: "bobby",
    age: 17,
    email: "b@b.com",
    isActivated: false,
})

export {}