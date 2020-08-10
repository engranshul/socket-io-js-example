// if we compile below file using tsc there will be no class in compiled file
var Goult = /** @class */ (function () {
    // interface type and array as constructor input       
    function Goult(quux, waldo) {
        this.garply = quux.corge + " " + quux.quuz + " " + waldo;
    }
    // getter setter usage in type script
    Goult.prototype.getGarply = function () {
        return this.garply;
    };
    return Goult;
}());
var bazz = { "quuz": "ABC", "corge": 123 };
var fredd = new Goult(bazz, [1, 2, 3]);
console.log(fredd.getGarply());

try {
    document.body.innerHTML = fredd.getGarply();
}
catch(e) {
    console.log("something bad happened")
}

