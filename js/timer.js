window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let deadline = '2022-12-01';
    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        if(Date.parse(endtime) < Date.parse(new Date())){
            seconds = minutes = hours = '0';
        }
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            let t = getTimeRemaining(endtime);
            if(t.seconds/10 < 1){
                t.seconds = '0' + t.seconds;
            }
            if(t.minutes/10 < 1){
                t.minutes = '0' + t.minutes;
            }
            if(t.hours/10 < 1){
                t.hours = '0' + t.hours;
            }
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', deadline);
});