const christmas="25 Dec 2020"
const days=document.querySelector(".d-day");
const hours=document.querySelector(".d-hour");
const min=document.querySelector(".d-min");
const sec=document.querySelector(".d-sec");



function countdown(){
const currentdate=new Date();
const christmasdate=new Date(christmas);

const timediffinsec= (christmasdate-currentdate)/1000;

const countdowndays=Math.floor(timediffinsec/3600/24);
const countdownhours=Math.floor(timediffinsec/3600)%24;
const countdownmin=Math.floor(timediffinsec/60)%60;
const countdownsec=Math.floor(timediffinsec)%60;
days.innerText=countdowndays
hours.innerText=countdownhours
min.innerText=countdownmin
sec.innerText=countdownsec
}

countdown()

setInterval(countdown,1000)

console.log(christmas)
