'use strict'

{

  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedtime = 0;

function initial(){
stop.classList.add('inactive');
reset.classList.add('inactive');
start.classList.remove('inactive');
}

function running(){
stop.classList.remove('inactive');
start.classList.add('inactive');
reset.classList.add('inactive');

}

function stopped(){
stop.classList.add('inactive');
reset.classList.remove('inactive');
start.classList.remove('inactive');
}

initial();



start.addEventListener('click', () => {
  if (start.classList.contains('inactive') === true){
    return;
  }

  startTime = Date.now();
    running();

  function countUp(){
    
    
    const d = new Date(Date.now() - startTime + elapsedtime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getUTCMilliseconds()).padStart(3, '0');
    
    
    timer.textContent = `${m}:${s}.${ms}`;



}


  timeoutId = setInterval(countUp, 10);
})



stop.addEventListener('click', () => {
  if (stop.classList.contains('inactive') === true){
    return;
  }

  
  stopped();


  clearTimeout(timeoutId);
  elapsedtime += Date.now() - startTime;


})




reset.addEventListener('click', () => {
  if (reset.classList.contains('inactive') === true){
    return;
  }
  
   initial();
   timer.textContent = '00:00.000';

   elapsedtime = 0;
})



}