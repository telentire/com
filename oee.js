/**
   * Oee calculation data
   */

 function calculate(){
   
    var a=parseInt(document.getElementById('sftTime').value); 
    var b=parseInt(document.getElementById('pdtime').value);
    var c=parseInt(document.getElementById('upltime').value);
    var d=parseInt(document.getElementById('ct').value);
    var e=parseInt(document.getElementById('prod').value);
    var f=parseInt(document.getElementById('rej').value);


    
    var runtime=a-b-c;
        document.getElementById("runtime").innerHTML=runtime;
    var gparts=e-f;
        document.getElementById("gparts").innerHTML=gparts;
    var aval=(runtime/(a-b))*100;
        document.getElementById("aval").innerHTML=aval.toFixed(2);
    var perf=d*e/runtime*100;
        document.getElementById("perf").innerHTML=perf.toFixed(2);
        var qlty=gparts/e*100;
        document.getElementById("qlty").innerHTML=qlty.toFixed(2);
        var oee=aval*perf*qlty/10000;
        document.getElementById("oee").innerHTML=oee.toFixed(2);
    var optefi=d*gparts/runtime*100;
        document.getElementById("optefi").innerHTML=optefi.toFixed(2);
        if(oee>=40){
            document.getElementById("rmks").textContent="Low: it is low score and need to improove availability by eliminating small stops.";
        }
        if(oee>=60){
            document.getElementById("rmks").textContent="Typical: OEE is fairly typical for discrete manufacturers, but indicates there is substantial room for improvement.";
        }
        if(oee>=85){
            document.getElementById("rmks").textContent="World Class OEE is considered world class for discrete manufacturers. For many companies, it is a suitable long-term goal.";
        }
        if(oee>=95){
            document.getElementById("rmks").textContent="Perfect OEE is perfect production: manufacturing only good parts, as fast as possible, with no stop time.";
        }
        if(oee<40){
            document.getElementById("rmks").textContent="Very Low: it is very low score and need to improove availability by eliminating small stops and neeed commitment to achieve.";
        }
        
        
    }