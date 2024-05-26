let name = {
    first: "sugam",
    last: "chaudhary"
}

// inbuild methord

let printName = function (state, city) {
    console.log(this.first + " " + this.last , state, city);
}

let printmyname = printName.bind(name, "up", "mathura");
printmyname()

// my methord

Function.prototype.mybind = function(...args) {
    let fx =  this
    return function () {
        fx.call(args[0],...args.slice(1, ))
    }
}
let a = printName.mybind(name,"up","mathura")
a()