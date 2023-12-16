setInterval(showTime,1000);

function showTime(){

    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year =time.getFullYear();
    // let am_pm = 'am';
    let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    let days = ["SUN", "MON","TUE", "WED", "THU", "FRI","SAT"];
    
    
    if(hours>=12){
        hours-=12;
        // am_pm ='pm'
    }else if(hours == 0){
        hours =12;
        // am_pm = 'am'
    }

    let current_time = `${hours}:${min}:${sec}`;
    let dayStr = `${days[day]}, ${date}-${months[month]}`

    document.getElementById('hour').innerHTML = current_time;
    // document.getElementById('am_pm').innerHTML = am_pm;
    document.getElementById('day').innerHTML = dayStr;
    document.getElementById('year').innerHTML = year

}