const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//console.log(secondHand + " " + minsHand + " " + secondHand);

function setDate(){
    
    const time = new Date();

    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds()

    //console.log(hour-12 + "H " + min + "Mins " + sec + "Secs");

    const hourDegrees = (hour / 12) * 360 + 90;
    const minDegrees = (min / 60) * 360 + 90;
    const secDegrees = (sec / 60) * 360 + 90;

    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const hourTextTag = document.getElementsByClassName('digital-time')[0]; 

    let hourText = hour-12;
    let minText = min;
    let secText = sec;

    if((hour-12) < 10) hourText = "0" + (hour-12);
    if(min < 10) minText = "0" + min;
    if(sec < 10) secText = "0" + sec;

    //console.log(hourText + ":" + minText + ":" + secText);
    hourTextTag.innerHTML = hourText + ":" + minText + ":" + secText;
}

setInterval(setDate, 1000);