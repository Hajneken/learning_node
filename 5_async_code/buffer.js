const buffer = new Buffer("Hello", "utf-8");

console.log(buffer)
console.log(buffer.toJSON());
console.log(buffer.toString())

buffer.write("wo")

console.log(buffer.toString())

