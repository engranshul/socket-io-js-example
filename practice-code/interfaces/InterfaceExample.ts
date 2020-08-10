// interface could be multiple wd same name in a class
interface car {
    engineNo : string;
    chassisNo : number;
}

// in interface when we however over function param plane it DOESNT shows properties in that interface
function process(input :car) {
    console.log(input);
    console.log(input.chassisNo +" "+input.engineNo)

}
let obj1 = {engineNo:"fastfurious",chassisNo:1234};
process(obj1);
console.log("obj is",obj1)

// below line will through error that property chassis number is missing
// let obj2 = {engineNo:"fastfurious"};
// process(obj2);
// console.log("obj is",obj2)