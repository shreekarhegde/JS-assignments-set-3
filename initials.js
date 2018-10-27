function abbrevate(a){
    if(a.length == 0){
        return '';
    }
    var result = [];
    for(var i = 0; i < a.length; i++ ){
        if(a[i] == a[i].toUpperCase()){
            //console.log(a[i].toUpperCase());
            result.push(a[i]);
        }
    }
    var finalResult = result[0]+'.'+result[2];
    return finalResult;
}
console.log(abbrevate('Sam Harris'));
console.log(abbrevate('Patrick Furne'));
console.log(abbrevate(''));
