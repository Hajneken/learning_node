// 1: on the fly
const obj1 = {};

// 2: using function constructor
function MyObj() {
  this.prop = "Dummy Property";
}
const obj2 = new MyObj();

// 3: using Object.create()
const objTemplate = {
  myProp: "dummy property",
};

const obj3 = Object.create(objTemplate);
