var i;
var sum = 0;
function grassHopper(a){
    for(var i = 0; i <= a; i++){
        
         sum = sum + i;
    }
return sum;
}
console.log(grassHopper(8));