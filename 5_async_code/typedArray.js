/* ES6 way to deal with raw binary data */
const buffer = new ArrayBuffer(8); //8 byte long buffer

// working with binary data in easier way
const view = new Int32Array(buffer);

/* putting base 10 numbers */
view[0] = 5; 
view[1] = 15;

console.log(view);
