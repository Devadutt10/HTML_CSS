//Variables..

const startBtn = document.querySelector('.start-btn');
const repeatBtn = document.querySelector('.repeat-btn');
const timerArea = document.querySelector('.timer');

//Times...

let second = 0;
let minute = 0;
let hour = 0;

//Varibles for leading zeros...

let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

//Some variables...

let timerStatus = "stopped";
let timerInterval = null;



function changeTime(){
    second++;
    if(second==60){
        second=0;
        minute++;
        if(minute==60){
            minute=0;
            hour++;
        }
    }
    if(second<10){
        leadingSecond = "0"+second.toString();

    }else{
        leadingSecond = second;
    }
    if(minute<10){
        leadingMinute = "0"+minute.toString();

    }else{
        leadingMinute = minute;
    }
    if(hour<10){
        leadingHour = "0"+hour.toString();

    }else{
        leadingHour = hour;
    }
    timerArea.innerText = leadingHour + ":" + leadingMinute + ":" + leadingSecond;
   
}




//Event Listeners...

startBtn.addEventListener('click',function(){
    if(timerStatus==="stopped"){
        timerInterval = window.setInterval(changeTime,1000);
        startBtn.innerHTML=`<i class="fa fa-pause"></i>`
        timerStatus="started";

    }else{
        window.clearInterval(timerInterval);
        startBtn.innerHTML = `<i class="fa fa-play"></i>`;
        timerStatus="stopped"

    }
});

repeatBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    second=0;
    minute=0;
    hour=0;
    timerArea.innerHTML= '00:00:00';
    startBtn.innerHTML = `<i class="fa fa-play"></i>`;
})

