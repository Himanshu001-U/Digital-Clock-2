let h1 = document.getElementById("hour");
let m1 = document.getElementById("minute");
let s1 = document.getElementById("second");
let amAndpm = document.getElementById("ampm");

function updateTime() {
    let h = new Date ().getHours();
    let m = new Date ().getMinutes();
    let s = new Date ().getSeconds();
    let ampm =  "AM";

     if ( h > 12) {
         h = h - 12;
         ampm = "PM";
     }   

     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
     h1.innerHTML = h;
     m1.innerHTML = m;
     s1.innerHTML = s;
     amAndpm.innerHTML = ampm;
     
}

setInterval(() => {
    updateTime();
},1000);
