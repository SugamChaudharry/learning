let score: number | string = 33  

score = 55
score = "100" 

type User = {
    name: string
    id: number
}
type Admin = {
    userName : string
    id: number
}

let sugam : User | Admin = {
    name : 'sugam',
    id: 225
}





function getDbId(id:number|string) {
    console.log(`user id is ${id}`);
}
getDbId(5)
getDbId("6")
function getDbId2(id:number|string) {
    // id.toLowerCase() // error bcz it can we num and str
    console.log(typeof id === "string" ? id.toUpperCase() : id * 2);
}
getDbId2(5)
getDbId2("sugam")





const data: number[]=[1,2,3,"5"]
const data2: string[]=[1,2,3,"5"]
const data3: (string | number)[] = [1,2,3,"5"]

export{}