function run(){
    console.log("Hey");
    hours = new Date().getHours();
    mins = new Date().getMinutes();
    secs = new Date().getSeconds();
    harrow = hours*30+mins/2;
    marrow = mins*6;
    sarrow = secs*6;
    hour.style.transform = `rotate(${harrow}deg)`;
    min.style.transform = `rotate(${marrow}deg)`;
    second.style.transform = `rotate(${sarrow}deg)`;

};
function run2(){
    console.log("Hey2");
    hours1 = new Date().getHours();
    mins1 = new Date().getMinutes();
    secs1 = new Date().getSeconds();
    document.getElementById('h').innerText=hours1;
    document.getElementById('m').innerText=mins1;
    document.getElementById('s').innerText=secs1;

    
}
setInterval(run2,1000);
setInterval(run,1000);
