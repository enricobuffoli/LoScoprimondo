var ore = 0, minuti = 0, secondi = 0, decimi = 0;
var vis = "";  
var  stop = true; 

function avvia() {  
    if(stop == true) {  
         stop = false;  
         cronometro();  
    }  
} 

function cronometro() {  
     if(stop == false) {  
          decimi++;  
          if(decimi > 9) {  
               decimi = 0;  
               secondi++;  
          }  
          if(secondi > 59) {  
               secondi = 0;  
               minuti++;  
          }  
          if(minuti > 59) {  
               minuti = 0;  
               ore++;  
          }  
          mostra();  
          setTimeout("cronometro()", 100);  
     }  
}

function mostra() {  
     if(ore < 10) vis = "0"; else vis = ore;  
     if(minuti < 10) vis = vis + "0";  
     vis = vis + minuti + ":";  
     if(secondi < 10) vis = vis + "0";  
     vis = vis + secondi + ":" + decimi;  
     document.getElementById("vis").innerHTML = vis;  
} 

function ferma() {  
     stop = true;  
} 

function azzera() {  
     if(stop == false) {  
          stop = true;  
     }  
     ore = minuti = secondi = decimi = 0;  
     vis = "";  
     mostra();  
} 