let hr = document.getElementById('manecilla-horas');
let min = document.getElementById('manecilla-minutos');
let sec = document.getElementById('manecilla-segundos');

function displayTime(){
    let date = new Date();
    
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Rotación
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Aplicar rotación
    hr.style.transform = `rotate(${hRotation}deg)`;  
    min.style.transform = `rotate(${mRotation}deg)`;  
    sec.style.transform = `rotate(${sRotation}deg)`;  
}

setInterval(displayTime, 1000);
