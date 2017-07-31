const fs=require("fs");

const rs = fs.createReadStream("gulpfile.js");
rs.pipe(process.stdout);