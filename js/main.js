const second = document.querySelector('.seconds .number');
mintues = document.querySelector('.minutes .number');
hours = document.querySelector('.hours .number');
days = document.querySelector('.days .number');

let secValue = 60,
    mintValue = 60,
    hourValue = 5,
    dayValue = 30;

const timefucntion_abm = setInterval(() => {
    secValue--;

    if (secValue == 0) {
        mintValue--;
        secValue = 60;
    }
    console.log(secValue);
    second.textContent = secValue;
    mintues.textContent = mintValue;
},1000);
