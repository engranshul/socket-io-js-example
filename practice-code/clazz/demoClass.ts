// if we compile below file using tsc there will be no class in compiled file
class Grault {
    private garply : string;
    // interface type and array as constructor input       
    constructor(quux:Quux,waldo:number[]) {
    this.garply = quux.corge +" "+quux.quuz + " "+waldo;
    }
    // getter setter usage in type script
    public getGarply() {
        return this.garply;
    }
}

interface Quux {
    quuz : string;
    corge : number;
}

let baz = {"quuz": "ABC","corge":123};
let fred = new Grault(baz,[1,2,3]);
console.log(fred.getGarply());
