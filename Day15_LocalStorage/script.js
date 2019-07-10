let itemList = document.querySelector(".plate");
let itemText = document.querySelector(".item-text");
let items = JSON.parse(localStorage.getItem("items")) || [];

function captureItem(e) {
    e.preventDefault();
    itemText = document.querySelector(".item-text");
    items.push(itemText.value);
    localStorage.setItem("items", JSON.stringify(items));
    addItem(items);
}

function addItem(items) {
    let str = "";
    items.forEach(element => {
        str = str + `<li>${element}</li>`;
    });
    itemList.innerHTML = str;
    itemText.value = "";
    console.log(localStorage.getItem("items"));
}

addItem(items);
window.addEventListener("submit", captureItem);