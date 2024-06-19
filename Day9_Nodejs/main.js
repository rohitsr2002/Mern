 //******************add and mul import from other file ***************************
// const[sum,mul]= require('./myMath.js');

// const res = sum (9,10);
// const res2= mul (9,10);
// 
// console.log(res);
// console.log(res2);
//******************************************************** */

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
