// if we compile below file using tsc there will be no class in compiled file
class Goult {
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

let bazz = {"quuz": "ABC","corge":123};
let fredd = new Goult(bazz,[1,2,3]);

console.log(fredd.getGarply());

document.body.innerHTML=fredd.getGarply();
