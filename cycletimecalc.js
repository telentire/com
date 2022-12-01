function calculate(){
    var a=parseInt(document.getElementById('cs').value); 
    var b=parseInt(document.getElementById('wpd').value);
    var c=parseFloat(document.getElementById('cl').value);
    var d=parseFloat(document.getElementById('fpr').value);
    var e=parseFloat(document.getElementById('noc').value);
   
    
    var rpm=(a*1000)/(3.14*b);
        document.getElementById("rpm").innerHTML=rpm.toFixed(0);

        var ct=(c/(rpm*d))*e;
        document.getElementById("ct").innerHTML=ct.toFixed(2);
   
        if(rpm>0){
            document.getElementById("rmks").textContent="Great you have got desired results to improve your process";
        }
        
        
    }
