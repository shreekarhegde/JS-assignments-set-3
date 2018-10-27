
function squareSum(a){
    var sum = 0;
    for(var i = 0; i < a.length; i++){
        sum = sum + (a[i] * a[i]) ;
       // console.log(sum);
 }
 return sum;
}

console.log(squareSum([1,2,3]));