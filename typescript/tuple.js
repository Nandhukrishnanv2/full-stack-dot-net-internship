var tu;
tu = [1, "hai", true];
// tu=[1,"hai",7];  it won't work because the order of the datatype is already pre defined
console.log("tuple :", tu);
var tup;
tup = [2, "welcome"];
console.log("before pushing", tup);
tup.push("hello");
tup.push(5);
console.log("after pushing", tup);
// tup.push(true); ---> it won't work because the boolean datatype is not defined
var tupl;
tupl = [55, "readonly"];
console.log(tupl);
// push function will not work because it specified as readonly
// named tuples
var arr;
arr = [1, "allen"];
console.log(arr);
