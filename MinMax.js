function FindMaxInArr(a){
    let max = a[0]
    let min = a[0]
    for(let i = 1; i<a.length;i++){
        if (max<a[i]) {
            max = a[i]
        } if (a[i]< min){
            min = a[i]
        }
    }
    return max ,max ;
}  
let a = [90,87, 100,765,908,67, 12,]
maximum = FindMaxInArr(a);
console.log(maximum);