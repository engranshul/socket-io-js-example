var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.corge + " " + quux.quuz + " " + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var baz = { "quuz": "ABC", "corge": 123 };
var fred = new Grault(baz, [1, 2, 3]);
console.log(fred.getGarply());
