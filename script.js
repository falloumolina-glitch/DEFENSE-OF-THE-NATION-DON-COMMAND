let timer, sec=0, mission="Aucune";
function startChrono(){ clearInterval(timer); timer=setInterval(()=>{sec++; document.getElementById('chrono').innerText = new Date(sec*1000).toISOString().substr(14,5);},1000); log("MISSION "+mission+" LANCÉE");}
function stopChrono(){ clearInterval(timer); log("MISSION EN PAUSE");}
function setMission(m){ mission=m; log("MISSION: "+m);}
function addScore(t){ let s=document.getElementById('score'+t); s.innerText=parseInt(s.innerText)+1; log("POINT POUR ARMÉE "+t);}
function log(txt){ document.getElementById('log').innerHTML = new Date().toLocaleTimeString()+" - "+txt+"<br>"+document.getElementById('log').innerHTML; }
