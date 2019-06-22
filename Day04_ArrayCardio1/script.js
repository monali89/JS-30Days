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

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who where born in the 1500's
console.log("1. Filter the list of inventors for those who where born in the 1500's");
let born15s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(born15s);

// 2. Give us an array of the inventory first and last names
console.log("2. Give us an array of the inventory first and last names");
let names = inventors.map(inventor => (inventor.first + " " + inventor.last));
console.log(names);

// 3. Sort the inventors by birthdate, oldest to youngest
console.log("3. Sort the inventors by birthdate, oldest to youngest");
let birthdates = inventors.sort((a, b) => {
    a.year > b.year ? 1 : -1;
});
console.table(birthdates);

// 4. How many years did the inventors live?
console.log("4. How many years did the inventors live?");
let yearsLivedTotal = inventors.reduce((sum, a) => sum + (a.passed - a.year), 0);
console.log(yearsLivedTotal);

// 5. Sort the inventors by years lived
console.log("5. Sort the inventors by years lived");
let yearsLived = inventors.sort((a, b) => {
    (a.passed - a.year) > (b.passed - b.year) ? 1 : -1;
});
console.table(yearsLived);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let l = Array.from(document.querySelectorAll('.mw-category a'))
l.map(m => m.text).filter(s => s.includes('de'))

// 7. Sort Exercise - sort the people alphabetically by last name
console.log("7. Sort Exercise - sort the people alphabetically by last name");
let sortedNames = people.sort((a, b) => {
    let[af, al] = a.split(', ');
    let[bf, bl] = b.split(', ');
    return al > bl ? 1 : -1;
});
console.table(sortedNames);

// 8. Reduce Exercise - Sum up the instances of each of these
console.log("8. Reduce Exercise - Sum up the instances of each of these");
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
let instances = new Map();
data.forEach(val => {
    if(instances.has(val)) instances.set(val, instances.get(val)+1);
    else instances.set(val, 1);
});
console.log(instances);





