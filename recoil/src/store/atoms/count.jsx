import { atom } from "recoil";

export const countAtom  = atom({
  key: "countAtom",
  default:0
})

// use recoil state --> [--,--]
//                       |   |
//                       | use set recoil value
//                  use recoil value