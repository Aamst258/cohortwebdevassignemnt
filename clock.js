function printTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');  
       let  am_pm = "AM"
    if (hours >= 12) { 
        am_pm = "PM"
 }   if (hours > 12) {
    hours-= 12
 }  if(hours == 0){ 
    hours = 12 ;
    am_pm = "AM"
 }
    
    console.log(`${hours}:${minutes}:${seconds} ${am_pm}`);
  }
  
  // Update the time every second
  setInterval(printTime, 1000);
  