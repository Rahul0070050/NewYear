
const reTime = '1 jan 2022';
const dayselm = document.getElementById("days");
const hourlm = document.getElementById("hour");
const minuteselm = document.getElementById("minutes");
const secondeselm = document.getElementById("secondes");


function counDown(){
    const newYearDate = new Date(reTime);
    const correntDate = new Date();
    const tottleSecondes = (newYearDate - correntDate) / 1000;
    const days = Math.floor(tottleSecondes / 3600 / 24);
    const hour = Math.floor(tottleSecondes / 3600) % 24;
    const minits = Math.floor(tottleSecondes / 60) % 60;
    const Secondes = Math.floor(tottleSecondes) % 60;

    dayselm.innerHTML = days;
    hourlm.innerHTML = zero(hour);
    minuteselm.innerHTML = zero(minits);
    secondeselm.innerHTML = zero(Secondes);

}


function zero(time){
    if(time < 10){
        return '0'+time;
    }else{
        return time;
    }
}

counDown();
setInterval(counDown, 1000);
