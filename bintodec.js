function binToDec(a){
    var sum = 0;
    a = a.reverse();
    for(var i = 0; i < a.length; i++){
        sum = sum + (a[i] * Math.pow(2,i));
    }
    return sum;
}
console.log(binToDec([1,1,1,1]));