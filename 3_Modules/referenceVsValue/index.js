/* passing by value */
let a = 2;
let b = a; // copy is made of 2

// console.log('a === b :>> ', a === b); // copies are identical => true

a = 3;

// console.log('a === b :>> ', a === b); // a changed

/* passing by reference 
the idea is that if you change property of object, the property changes everywhere where the object was cloned 
*/
const obj = { key: "value" }; // establishes new memory location e.g. 0x001
const obj2 = obj; // copy by reference -> the same memory location 0x001 is used

console.log("obj === obj2 :>> ", obj === obj2);

function passByRef(obj) {
  console.log("calling passByRef function");
  obj.key = "different"; // here I am mutating the bobject
}

passByRef(sobj);

console.log("obj :>> ", obj);
obj2.key = "very different"; // changes both obj and obj2
console.log("obj2 :>> ", obj2);
console.log("obj :>> ", obj);
