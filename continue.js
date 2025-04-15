let sum = 0;
for(let i=0; i<=20; i++){
    // console.log(i)
    if(i%2===1){
        continue;
    }
    sum = sum + i;
}
console.log('the sum is',sum)