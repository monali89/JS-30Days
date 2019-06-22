const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 }
];

let map = { first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 };
/*console.log(map);
console.log(typeof(map));
console.log(map.last);
for(let key in map){
    console.log(map[key]);
}*/
/*let mapObj = new Map(map);
console.log(mapObj);
console.log(typeof(mapObj));*/
//console.log(Object.entries(mapObj));

//inventors.forEach(inventor => console.log(inventor));
//console.log(inventors);

let namesArr = [];
let birthDatesArr = [];
let passedArr = [];

inventors.forEach(inventor => {
    namesArr.push(inventor.first + " " + inventor.last);
    birthDatesArr.push(inventor.year);
    passedArr.push(inventor.passed);
});

// 1. Filter the list of inventors for those who where born in the 1500's
console.log("1. Filter the list of inventors for those who where born in the 1500's");
inventors.forEach(inventor => {
    //console.log(inventor);
    //console.log(typeof(inventor));
    let thisYear = inventor.year;
    //console.log(typeof(Number(thisYear)));
    if(thisYear <= 1599  && thisYear > 1499){
        console.log(inventor.first + " " + inventor.last + ", Born " + thisYear);
    }
});

// 2. Give us an array of the inventory first and last names
console.log("2. Give us an array of the inventory first and last names");
let arr1 = [];
inventors.forEach(inventor => {
    arr1.push(inventor.first + " " + inventor.last);
});
console.log(arr1);

// 3. Sort the inventors by birthdate, oldest to youngest
console.log("3. Sort the inventors by birthdate, oldest to youngest");
let arr2 = [];
let map2 = new Map();
inventors.forEach(inventor => {
    arr2.push(Number(inventor.year));
    map2.set(Number(inventor.year), inventor.first + " " + inventor.last);
});
arr2.sort();
for(let date of arr2){
    console.log(date + ", " + map2.get(date));
}

// 4. How many years did the inventors live?
console.log("4. How many years did the inventors live?");
inventors.forEach(inventor => {
    console.log(inventor.first + " " + inventor.last + ", lived " + 
            (Number(inventor.passed) - Number(inventor.year)) + " years");
});

// 5. Sort the inventors by years lived
console.log("5. Sort the inventors by years lived");
let arr3 = [];
let map3 = new Map();
inventors.forEach(inventor => {
    let diff = Number(inventor.passed) - Number(inventor.year);
    arr2.push(diff);
    if(map3.get(diff) == undefined){
        let arrTemp = [inventor.first + " " + inventor.last];
        map3.set(diff, arrTemp);
    }else{
        let arrTemp = map3.get(diff);
        arrTemp.push(inventor.first + " " + inventor.last);
        map3.set(diff, arrTemp);
    }
});
arr3.sort();
for(let d of arr3){
    let arrTemp = map3.get(d);
    console.log(d);
    for(let a of arrTemp){
        console.log(a);
    }
}

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort Exercise - sort the people alphabetically by last name