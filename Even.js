function evenNum(n){
    for(let i = 0 ;  i<n.length; i++){
        if(n[i] % 2 == 0){
           console.log(n[i]);
        }
    }
}  
let n = [10, 43, 80,64, 28,1]
evenNum(n)