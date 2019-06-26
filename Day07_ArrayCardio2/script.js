const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Is anyone adult in the people array
let isAdult = people.some(a => {
    let currentYear = (new Date()).getFullYear();
    return (currentYear - a.year) >= 19;
})
console.log("Is anyone adult in the people array? " + isAdult);

// Is everyone adult is the people array
let allAdult = people.every(a => {
    let currentYear = (new Date()).getFullYear();
    return (currentYear - a.year) >= 19;
})
console.log("Is everyone adult in the people array? " + allAdult);

// Find comment with the ID of 823423
let comm = comments.find(comment => comment.id === 823423);
console.log("Find comment with the ID of 823423 - " + comm.text);

// Find comment with the ID of 823423, then delete it
let commIn = comments.findIndex(comment => comment.id === 823423);
console.log("Find index comment with the ID of 823423 - " + commIn);
console.log("Before deletion");
console.table(comments);
comments.splice(commIn, 1);
console.log("After deletion");
console.table(comments);


/*

ARRAY FUNCTIONS - some, every, find, findIndex

SPLICE: 
    array.splice(startIndex[, elementDeleteCount, elementToInsert1, elementToInsert2, ...])
    deletes elements from an array and also inserts new ones
    negative indexes allowed (TODO: Read on negative indexes)
    if elementDeleteCount not mentioned, all the elements starting from startIndex are deleted

SLICE:
    array.slice(startIndex, endIndex)
    returns array from the given start and end index

FIND:
    array.find(function(item[, index, thisArray]) => {condition for the item})
    with the first match search stops (even if more matches are present)
    if consition matches returns the item, if not, undefined is returned
    arguments index and thisArray are rarely used (TODO: Read more about them)

FINDINDEX:
    same as above, but returns the index of the matched item

SOME:
    returns true if atleast one array element matches the given condition

EVERY:
    return true if all the elements of the array satisfy the given condition

*/