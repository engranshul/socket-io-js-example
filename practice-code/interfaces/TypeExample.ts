// type can not be multiple wd same name in a class
type plane= {
    engineNo : string;
    chassisNo : number;
}

// in type when we however over function param plane it shows properties in that type
function processor(input :plane) {
    console.log(input);
    console.log(input.chassisNo +" "+input.engineNo)

}
let sukhoi = {engineNo:"fastfurious",chassisNo:1234};
processor(sukhoi);
console.log("obj is",sukhoi)

// below line will through error that property chassis number is missing
// let obj2 = {engineNo:"fastfurious"};
// process(obj2);
// console.log("obj is",obj2)