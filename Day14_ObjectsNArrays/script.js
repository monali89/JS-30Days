// Numbers
let num1 = 23;
let num2 = num1;
console.log(num1 + " " + num2);
num1 = 56;
console.log(num1 + " " + num2);

// Strings
let str1 = "Test 1";
let str2 = str1;
console.log(str1 + " " + str2);
str2 = "Test 2";
console.log(str1 + " " + str2);

// Arrays
let arr1 = ["Apple", "Orange", "Banana"];
//let arr2 = arr1;
let arr2 = Array.from(arr1);
console.log(arr1 + " | " + arr2);
arr2[2] = "Gin";
console.log(arr1 + " | " + arr2);

// Objects
let obj1 = {
    id: 123,
    name: "Test1",
    Address: "NYC"
};
let obj2 = obj1;
console.log(obj2);
obj2.Address = "DC";
console.log(obj1);
console.log(obj2);