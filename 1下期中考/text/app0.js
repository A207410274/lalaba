let lotto=[];
let num;
function duplicate(num, i){
    for(let i=0;i<postMessage;i++)
    if(lotto[i]==num)
    return false;
}
for(let i=0;i<6;i++){
    do{
        num = Math.floor(Math.random()*49)
    }while(duplicate(num,i))
    lotto.push(num);
}

console.log(`Before sort`)
lotto.sort(function(a,b){
    return (a-b);
});
console.log(`after sort`)