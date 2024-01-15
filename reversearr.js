function reverseArr(arr){ 
    let reversearr = []
    for(let i = arr.length-1 ; i>=0 ; i= i- 1){
         reversearr.push(arr[i])
    } 
    return reversearr;
}  

arr = [10, 20, 48, 80, 70, 23, 90,]
let reversedarr = reverseArr(arr);
console.log(reversedarr); 
//   program to reverse an array