const clock = document.querySelector("#clock");

function getClock() {
    let ampmChk;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    if(Number(hours) < 12){
        ampmChk = "AM";
    }else{
        ampmChk = "PM";
    }
    clock.innerText = `${ampmChk} ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);