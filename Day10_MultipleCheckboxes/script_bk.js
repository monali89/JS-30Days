let test = document.getElementById("option1");
test.append("TEST");

//let response = fetch("https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json");
let response = fetch("https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json");
let d;
let e = [];

console.log(response);

response.then(data => {
    d = data.json();
    d.then(elem => {
        test01(elem);
        //e = e.append(elem);
        /*console.log(Array.from(elem));
        e = Array.from(elem);
        console.log(e);
        elem.forEach(el => {
            console.log(typeof(el));
        });*/
    });
});

function test01(elem){
    e = Array.from(elem);
    console.log(e);
    //e.forEach(el => console.log(el.author));
}

