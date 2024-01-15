let seconds  = 30

function timer(){
  if(seconds >= 0 && seconds <= 30){
    console.log("00:"+ (seconds < 10 ? "0"+ seconds : seconds ))
    seconds-- 
    setTimeout(timer, 1000)
  } else{
    console.log("Time up")
  }
}  
//   1 create a counter in javascript (counts down from 30 to 0 )    

timer()   
