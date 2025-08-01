
function getclock() {
    day = new Date();
    min=day.getMinutes().toString().padStart(2, '0');
    hour=day.getHours();
    second=day.getSeconds().toString().padStart(2, '0');
    if (hour>=12){
        prefix="PM"
        hour=hour-12
    }
    else{
        prefix="AM"
    }
    document.getElementById("clock").textContent=
    `${hour.toString().padStart(2, '0')}:${min}:${second} ${prefix}`;
}



const repeat = setInterval(getclock,1000);
getclock();
