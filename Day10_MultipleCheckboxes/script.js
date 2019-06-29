let dataUrl = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json";
let randArray = [];
let respArray = [];
let checkboxexCount = 10;

function fillRandomArray(httpsResponseElement){
    respArray = Array.from(httpsResponseElement);
    let size = respArray.length;
    for(let i = 0; i < checkboxexCount; i++){
        let k = Math.floor(Math.random() * size);
        randArray.push(respArray[k].title + ", " + respArray[k].author + " (" + respArray[k].year + ")");
        //console.log(respArray[k]);
    }
}

function pupulateHtml(){
    for(let i = 0; i < checkboxexCount; i++){
        let temp = document.getElementById(`option${(i+1)}`);
        temp.append(randArray[i]);
    }
}

function isChecked(e){
    //console.log(this);

    //console.log(e);
}

let response = fetch(dataUrl);
response.then(data => {
    let d = data.json();
    d.then(elem => {
        fillRandomArray(elem);
        pupulateHtml();
    });
});

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
checkboxes.forEach(checkbox => checkbox.addEventListener("click", isChecked));

//window.addEventListener("click", isChecked);



