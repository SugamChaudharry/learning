var score = 33;
score = 55;
score = "100";
var sugam = {
    name: 'sugam',
    id: 225
};
function getDbId(id) {
    console.log("user id is ".concat(id));
}
getDbId(5);
getDbId("6");
function getDbId2(id) {
    // id.toLowerCase() // error bcz it can we num and str
    console.log(typeof id === "string" ? id.toUpperCase() : id * 2);
}
getDbId2(5);
getDbId2("sugam");
