


var ramadanDate = new Date('2024-03-10'); 

function calculateRemainingTime() {
 
var now = new Date();

  
var  timeDifference = ramadanDate - now;
  
var days = Math.floor(timeDifference/(1000 * 60 *60 * 24 ));
var hours =Math.floor(timeDifference%(1000 * 60 *60 * 24 )/(1000 * 60 *60));

var minutes =Math.floor(timeDifference%(1000 * 60 *60 )/(1000 * 60));

var seconds =Math.floor(timeDifference%(1000 * 60 )/(1000));

return { days, hours, minutes, seconds };

}


var remaininTime = calculateRemainingTime();
document.write( "<h3>Days</h3>" + remaininTime.days + "<br />");
document.write( "<h3>Hours</h3>" + remaininTime.hours + "<br />");
document.write( "<h3>Minutes</h3>" + remaininTime.minutes + "<br />");
document.write( "<h3>Seconds</h3>" + remaininTime.seconds + "<br />");


