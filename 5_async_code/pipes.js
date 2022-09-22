const fs = require("fs");

/* library for compressing => .gz */
const zlib = require("zlib");

const readable = fs.createReadStream(__dirname + "/myfile.txt", "utf-8");

const writeable = fs.createWriteStream(
  __dirname + "/COPY2_myfile.txt",
  "utf-8"
);

const compressed = fs.createWriteStream(__dirname + "/myfile.txt.gz");

/* creates a transform stream
    i.e. both readable and writable 
*/
let gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);
